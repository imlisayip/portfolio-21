import { hydrateRoot, createRoot } from 'react-dom/client'

import App from './App'

// Register service worker with modern APIs
if ('serviceWorker' in navigator) {
  // Use 'DOMContentLoaded' instead of 'load' to avoid potential unload issues
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  } else {
    // Document is already loaded
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  }
}

/**
 * When `#redwood-app` isn't empty then it's very likely that you're using
 * prerendering. So React attaches event listeners to the existing markup
 * rather than replacing it.
 * https://reactjs.org/docs/react-dom-client.html#hydrateroot
 */
const redwoodAppElement = document.getElementById('redwood-app')

if (!redwoodAppElement) {
  throw new Error(
    "Could not find an element with ID 'redwood-app'. Please ensure it exists in your 'web/src/index.html' file."
  )
}

if (redwoodAppElement.children?.length > 0) {
  hydrateRoot(redwoodAppElement, <App />)
} else {
  const root = createRoot(redwoodAppElement)
  root.render(<App />)
}
