const CACHE_NAME = 'lisayip-portfolio-v1'
const urlsToCache = [
  '/',
  '/about',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/favicon.png',
  '/images/favicon.png'
]

// Use modern service worker APIs
self.addEventListener('install', (event) => {
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
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
