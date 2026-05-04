const cacheName = 'mini-pos-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/dist/app.js',  // si lo tienes compilado
  '/dist/style.css' // si usas Tailwind compilado
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assetsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
