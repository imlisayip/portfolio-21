// Utility to handle console errors gracefully
export const setupConsoleErrorHandler = () => {
  if (typeof window === 'undefined') return

  // Store original console methods
  const originalError = console.error
  const originalWarn = console.warn

  // Override console.error to filter out Vercel-related errors
  console.error = function(...args: any[]) {
    const message = args.join(' ')

    // Filter out Vercel-related errors
    if (message.includes('vercel') ||
        message.includes('ERR_BLOCKED_BY_CLIENT') ||
        message.includes('Failed to load resource') ||
        message.includes('net::ERR_BLOCKED_BY_CLIENT')) {
      return // Silently ignore these errors
    }

    // Pass through other errors
    originalError.apply(console, args)
  }

  // Override console.warn to filter out Vercel-related warnings
  console.warn = function(...args: any[]) {
    const message = args.join(' ')

    // Filter out Vercel-related warnings
    if (message.includes('vercel') ||
        message.includes('blocked') ||
        message.includes('ad blocker')) {
      return // Silently ignore these warnings
    }

    // Pass through other warnings
    originalWarn.apply(console, args)
  }

  // Handle network errors for Vercel scripts
  window.addEventListener('error', function(e) {
    if (e.target &&
        e.target instanceof HTMLScriptElement &&
        e.target.src &&
        (e.target.src.includes('vercel') || e.target.src.includes('insights'))) {
      e.preventDefault()
      return false
    }
  }, true)

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', function(e) {
    const message = e.reason?.message || e.reason || ''
    if (message.includes('vercel') || message.includes('blocked')) {
      e.preventDefault()
      return false
    }
  })
}

// Export for use in other files
export default setupConsoleErrorHandler
