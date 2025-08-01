import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import React, { useEffect, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import setupConsoleErrorHandler from 'src/lib/consoleErrorHandler'

import './index.css'
import './hamburgers.css'

// Dynamically import SpeedInsights outside of component to prevent hook issues
const SpeedInsightsComponent = React.lazy(() =>
  import('@vercel/speed-insights/react').then(module => ({
    default: module.SpeedInsights
  })).catch(() => ({
    default: () => null // Fallback component
  }))
);

// Component to safely load SpeedInsights with better performance
const SafeSpeedInsights = () => {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Setup console error handler
    setupConsoleErrorHandler()

    // Only load SpeedInsights in production and if not blocked
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Check if ad blockers might be active
      const hasAdBlocker = window.navigator.userAgent.includes('Chrome') &&
        (window.navigator.userAgent.includes('AdBlock') ||
         window.navigator.userAgent.includes('uBlock'));

      if (!hasAdBlocker) {
        // Increased delay to ensure page is fully loaded and stable
        const timer = setTimeout(() => {
          // Only load if page is idle
          if (document.readyState === 'complete') {
            setShouldLoad(true)
          } else {
            window.addEventListener('load', () => {
              setTimeout(() => setShouldLoad(true), 1000)
            })
          }
        }, 3000) // Increased delay for better performance

        return () => clearTimeout(timer)
      }
    }
  }, [isMounted])

  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  // Don't render if there was an error or we shouldn't load
  if (hasError || !shouldLoad) {
    return null
  }

  return (
    <ErrorBoundary onError={() => setHasError(true)}>
      <React.Suspense fallback={null}>
        <SpeedInsightsComponent />
      </React.Suspense>
    </ErrorBoundary>
  )
}

// Enhanced error boundary for SpeedInsights
class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ onError?: () => void }>,
  { hasError: boolean }
> {
  constructor(props: React.PropsWithChildren<{ onError?: () => void }>) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError()
    }

    // Silently handle SpeedInsights errors - don't log to console
    // console.debug('SpeedInsights error handled:', error)
  }

  render() {
    if (this.state.hasError) {
      return null // Don't render SpeedInsights if it fails
    }

    return this.props.children
  }
}

const App = () => (
  <HelmetProvider>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>
          <Routes />
          <SafeSpeedInsights />
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </HelmetProvider>
)

export default App
