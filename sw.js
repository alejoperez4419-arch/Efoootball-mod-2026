const CACHE = "admin-app-v1";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/main.js",
        "/manifest.json",
        "/admin.png"
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
