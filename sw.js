const CACHE_NAME="v1_cache_panel_adm",
 urlsToCache = [

    "https://script.google.com/macros/s/AKfycbw8SW04M5PKqxrMc5kCmN6RFSg7eQ0cCjuwFGdouIOgOydCesR7sXN0nObYhEP_lr6SSA/exec","./manifest.json"

 ];

 self.addEventListener("install",(e) => {
   e.waitUntil(
   caches
     .open(CACHE_NAME)
     .then((cache) => {
      return cache.addAll(urlsToCache).then(() => self.skipeWaiting());
     })
     .catch((err) => "Falha ao registrar cache",err)
   );
 })

self.addEventListener("activate" , (e) => { 
   const cacheWitheList = [CACHE_NAME];

e.waitUntil(
  caches.keys().then((cachesNames) => 
    cachesNames.map((cacheName) => {
      if(cacheName.indexOf(cacheName)===-1){
        return caches.delete(cacheName)
      }
    })
   )
);
});

self.addEventListener("fetch",(e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if(res){
         return res;
      }
      return fetch(e.request);
    })
  );
});