import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import React, { useEffect, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import setupConsoleErrorHandler from 'src/lib/consoleErrorHandler'

import './index.css'
import './hamburgers.css'

// Component to safely load SpeedInsights
const SafeSpeedInsights = () => {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Setup console error handler
    setupConsoleErrorHandler()

    // Only load SpeedInsights in production and if not blocked
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Check if ad blockers might be active
      const hasAdBlocker = window.navigator.userAgent.includes('Chrome') &&
        (window.navigator.userAgent.includes('AdBlock') ||
         window.navigator.userAgent.includes('uBlock'));

      if (!hasAdBlocker) {
        // Small delay to ensure the page is fully loaded
        const timer = setTimeout(() => {
          setShouldLoad(true)
        }, 2000) // Increased delay to ensure page is stable

        return () => clearTimeout(timer)
      }
    }
  }, [])

  // Don't render if there was an error or we shouldn't load
  if (hasError || !shouldLoad) {
    return null
  }

  // Dynamically import SpeedInsights only when needed
  const SpeedInsightsComponent = React.lazy(() =>
    import('@vercel/speed-insights/react').then(module => ({
      default: module.SpeedInsights
    }))
  );

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
