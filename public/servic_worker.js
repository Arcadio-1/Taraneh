var CACHE_STATIC_NAME = "static-v10";
var CACHE_DYNAMIC_NAME = "dynamic-v10";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then((cache) => {
      cache.addAll(["/", "/noConnection"]);
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
  // if (request.destination === "image") {
  //   return;
  // }
  const cache = await caches.open(CACHE_DYNAMIC_NAME);
  await cache.put(request, response);
};

const cacheFirst = async (request) => {
  try {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      // console.log("readed from cache");
      return responseFromCache;
    }
    const responseFromNetwork = await fetch(request);
    console.log(responseFromNetwork);
    console.log(request);
    if (!responseFromNetwork.ok) {
      throw new Error("خطا در اتصال");
    }
    putInCache(request, responseFromNetwork.clone());
    // console.log("readed from netwoek");
    return responseFromNetwork;
  } catch (error) {
    console.log("XXXXXXXXXXXXXXXX");
    const staticCaches = await caches.open(CACHE_STATIC_NAME);
    const noConnection = await staticCaches.match("/noConnection");
    console.log(noConnection.url);
    // return await staticCaches.match("/noConnection");
    return noConnection;
    // const fet = await fetch(noConnection);
    // console.log(fet);
    // console.log(noConnection);
    // return fet;
  }
};

self.addEventListener("fetch", (event) => {
  // console.log(event.request.url);
  // console.log(event.request.destination);
  // console.log(event.request);
  event.respondWith(cacheFirst(event.request));
});
