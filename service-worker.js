const CACHE_NAME = 'juzgado-vial-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './juzgado.html',
  './notificaciones.html',
  './style.css',
  './logo.png',
  './logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
