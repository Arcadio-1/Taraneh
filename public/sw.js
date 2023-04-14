var CACHE_STATIC_NAME = "static-v9";
var CACHE_DYNAMIC_NAME = "dynamic-v9";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then((cache) => {
      cache.addAll(["/"]);
    })
  );
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

// self.addEventListener("fetch", (event) => {
// const api = event.request.url.split("/");
// if (api[4] === "productsManager") {
//   console.log(api[4], event.request.url);
// }
// if (api[4] === "productsManager") {
//   console.log("api[4], event.request.url");
//   return;
// }

// event.respondWith(
//   caches.match(event.request).then((response) => {
//     if (response) {
//       return response;
//     } else {
//       return fetch(event.request)
//         .then((res) => {
//           return caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
//             cache.put(event.request.url, res.clone());
//             return res;
//           });
//         })
//         .catch((error) => {});
//     }
//   })
// );
// });

// self.addEventListener("fetch", function (event) {
// const api = event.request.url.split("/");
// if (api[4] === "productsManager") {
// console.log(api[4], event.request.url);
// }
// if (api[4] === "productsManager") {
// event.respondWith(fetch(null));
// }
//   event.respondWith(
//       caches.match(event.request).then
//     )

//   return event.respondWith(fetch(event.request));
// });

const putInCache = async (request, response) => {
  const cache = await caches.open(CACHE_DYNAMIC_NAME);
  await cache.put(request, response);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    console.log("readed from cache");
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  console.log("readed from netwoek");
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  console.log("kir khar");
  event.respondWith(cacheFirst(event.request));
});
