self.addEventListener('fetch', function(event) {
  // Este código permite que la app cargue más rápido
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});