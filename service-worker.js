const CACHE_NAME = "tracker-cache-v1";
const urlsToCache = [
  "/02.html",
  "/calendar.html",
  "/year.html",
  "/day.html"
  // If you move CSS/JS to separate files, add them here too
];

// Install service worker and cache files
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Intercept network requests and serve cached files
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
