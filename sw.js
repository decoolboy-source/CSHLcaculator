// Service Worker — CSHL PWA (bản test nhanh, cài đặt được "Add to Home Screen")
// Chiến lược: cache-first cho app shell (HTML/JS/icon), network vẫn được ưu tiên khi
// online để không kẹt bản cũ trong giai đoạn đang test/sửa liên tục.
const CACHE_NAME = 'cshl-pwa-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './vendor/lucide.min.js',
  './vendor/xlsx.full.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon-180.png',
  './icons/favicon-32.png',
  './icons/favicon-16.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) { return cache.addAll(APP_SHELL); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

// Network-first cho index.html (luôn lấy bản mới nhất khi đang test sửa code),
// cache-first cho các file tĩnh còn lại (vendor/icon) để load nhanh + chạy offline.
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isHtml = event.request.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname === '/';

  if (isHtml) {
    event.respondWith(
      fetch(event.request).then(function (res) {
        caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, res.clone()); });
        return res;
      }).catch(function () { return caches.match(event.request).then(function (r) { return r || caches.match('./index.html'); }); })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(function (cached) {
        return cached || fetch(event.request).then(function (res) {
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, res.clone()); });
          return res;
        });
      })
    );
  }
});
