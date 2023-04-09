var CACHE_STATIC_NAME = "static-v2";
var CACHE_DYNAMIC_NAME = "dynamic-v2";

self.addEventListener("install", (event) => {
  event.waitUntil;
  caches.open(CACHE_STATIC_NAME).then((cache) => {
    cache.addAll([
      "/",
    ]);
  })();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then((res) => {
            return caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
              cache.put(event.request.url, res.clone());
              return res;
            });
          })
          .catch((error) => {});
      }
    })
  );
});
