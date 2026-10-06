/**
 * ====================================================================
 * CHALISA PATH - SERVICE WORKER (PWA & OFFLINE ENGINE)
 * ====================================================================
 * Enables 100% offline access, fast cache-first loading, and
 * reliable font persistence for Android, iOS, and Desktop.
 */

const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE_NAME = `chalishapath-static-${CACHE_VERSION}`;
const FONT_CACHE_NAME = `chalishapath-fonts-${CACHE_VERSION}`;

// Core assets required for 100% offline functionality
const PRECACHE_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.webmanifest',
    './img/logo.png',
    './img/om.png',
    './img/favicon.ico',
    './img/favicon-16x16.png',
    './img/favicon-32x32.png',
    './img/apple-touch-icon.png',
    './img/android-chrome-192x192.png',
    './img/android-chrome-512x512.png',
    './img/social-preview.png'
];

/**
 * 1. INSTALLATION: Pre-cache static assets
 */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then((cache) => {
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

/**
 * 2. ACTIVATION: Clean up outdated caches from previous versions
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== STATIC_CACHE_NAME && cacheName !== FONT_CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

/**
 * 3. FETCH INTERCEPTION & CACHING STRATEGIES
 */
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle GET requests
    if (request.method !== 'GET') return;

    // A. GOOGLE FONTS (CSS & WOFF2) -> Stale-While-Revalidate in Font Cache
    if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
        event.respondWith(
            caches.open(FONT_CACHE_NAME).then((cache) => {
                return cache.match(request).then((cachedResponse) => {
                    const fetchPromise = fetch(request).then((networkResponse) => {
                        if (networkResponse && networkResponse.status === 200) {
                            cache.put(request, networkResponse.clone());
                        }
                        return networkResponse;
                    }).catch(() => cachedResponse); // If offline, return cached font

                    return cachedResponse || fetchPromise;
                });
            })
        );
        return;
    }

    // B. NAVIGATION REQUESTS (HTML page loads) -> Network-first with cache fallback
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then((networkResponse) => {
                    // Cache the fresh HTML page
                    if (networkResponse && networkResponse.status === 200) {
                        const copy = networkResponse.clone();
                        caches.open(STATIC_CACHE_NAME).then((cache) => cache.put(request, copy));
                    }
                    return networkResponse;
                })
                .catch(async () => {
                    // Offline fallback: return cached index.html
                    const cached = await caches.match(request);
                    if (cached) return cached;
                    const fallbackHtml = await caches.match('./index.html');
                    return fallbackHtml || caches.match('./');
                })
        );
        return;
    }

    // C. SAME-ORIGIN STATIC ASSETS (CSS, JS, Images, Manifest) -> Cache-first with background revalidation
    if (url.origin === self.location.origin) {
        event.respondWith(
            caches.match(request).then((cachedResponse) => {
                // Return cached version immediately if available
                const fetchPromise = fetch(request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(STATIC_CACHE_NAME).then((cache) => cache.put(request, responseToCache));
                    }
                    return networkResponse;
                }).catch(() => {
                    // Silent catch for offline mode
                    return cachedResponse;
                });

                return cachedResponse || fetchPromise;
            })
        );
    }
});

/**
 * 4. MESSAGE LISTENER (Skip waiting on update request)
 */
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
