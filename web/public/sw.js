const CACHE_NAME = 'lisayip-portfolio'
const urlsToCache = [
  '/favicon.png',
  '/images/favicon.png'
]

// Use modern service worker APIs
self.addEventListener('install', (event) => {
  // Skip caching during development
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    console.log('Development mode: skipping service worker cache')
    return
  }

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch((error) => {
        console.warn('Service worker cache failed:', error)
      })
  )
})

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return
  }

  // Skip caching during development
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .catch(() => {
            // Return a fallback response if both cache and network fail
            return new Response('Network error', { status: 503 })
          })
      })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete all old caches
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      // Force refresh all clients
      return self.clients.claim()
    })
  )
})
