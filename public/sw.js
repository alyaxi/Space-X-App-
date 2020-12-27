/* eslint-disable no-restricted-globals */
var CACHE_NAME = 'SpaceX App';
var urlsToCache = [
  "index.html",
  "manifest.json",
  "Logo.png"
];
const self = this;
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
self.addEventListener("activate" , () => {
    console.log("Service worker activate");
})