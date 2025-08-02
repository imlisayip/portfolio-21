// Service Worker for Lisa Yip Portfolio
const CACHE_NAME = 'lisa-yip-portfolio-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/about',
  '/fonts/gt-america-medium.woff',
  '/fonts/gt-america-light.woff',
  '/fonts/canela-thin-web.woff',
  '/images/optimized/creativity-over-everything.webp',
  '/images/optimized/dropbox-transparency.webp',
  '/images/optimized/fullstory-heatmaps.webp',
  '/images/optimized/fullstory-journey-maps.webp',
  '/images/optimized/patreon-product.webp',
  '/images/optimized/salesforce-dreamforce.webp',
  '/images/optimized/work-in-progress.webp',
  '/images/optimized/YIR.webp',
  '/images/optimized/sf-trolley.webp',
  '/favicon.png'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .catch((error) => {
        console.log('Cache install failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip Vercel analytics and external resources
  if (url.hostname.includes('vercel') || url.hostname.includes('googleapis') || url.hostname.includes('gstatic')) {
    return;
  }

  // Skip critical assets that should load directly
  if (url.pathname.includes('/assets/') && (url.pathname.includes('.js') || url.pathname.includes('.css'))) {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (request.destination === 'font') {
    event.respondWith(handleFontRequest(request));
  } else if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(handleAssetRequest(request));
  } else {
    event.respondWith(handlePageRequest(request));
  }
});

// Handle image requests with cache-first strategy
async function handleImageRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Image fetch failed:', error);
    return new Response('', { status: 404 });
  }
}

// Handle font requests with cache-first strategy
async function handleFontRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Font fetch failed:', error);
    return new Response('', { status: 404 });
  }
}

// Handle asset requests with stale-while-revalidate strategy
async function handleAssetRequest(request) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);

    const fetchPromise = fetch(request).then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    });

    return cachedResponse || fetchPromise;
  } catch (error) {
    console.log('Asset fetch failed:', error);
    // Fallback to network request without caching
    return fetch(request);
  }
}

// Handle page requests with network-first strategy
async function handlePageRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('', { status: 404 });
  }
}

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle background sync tasks
  console.log('Background sync completed');
}
