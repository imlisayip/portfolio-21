import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { SpeedInsights } from '@vercel/speed-insights/react'
import React from 'react'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'
import './hamburgers.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <RedwoodApolloProvider>
        <Routes />
        {/* Wrap SpeedInsights in error boundary to prevent console errors */}
        <ErrorBoundary>
          <SpeedInsights />
        </ErrorBoundary>
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

// Simple error boundary for SpeedInsights
class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  { hasError: boolean }
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Silently handle SpeedInsights errors
    console.debug('SpeedInsights error handled:', error)
  }

  render() {
    if (this.state.hasError) {
      return null // Don't render SpeedInsights if it fails
    }

    return this.props.children
  }
}

export default App
