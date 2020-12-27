/* eslint-disable no-restricted-globals */
var CACHE_NAME = 'SpaceX App';
var urlsToCache = [
  '/',
  "index.html",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "/missions",
  "/static/media/3.fe2d851b.jpg",
  "/static/media/2.c330c398.jpg",
  "/static/media/4.885a82d8.png",
  "manifest.json",
  "Logo.png"
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Catch and return request

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });


// Update Service worker so it updates itself and removes files from cache which are not useful
self.addEventListener("activate" , (event) => {
    console.log("Service worker activate");
})