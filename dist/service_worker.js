(()=>{var n="3.0.1";var r={cacheName:n,staticCacheItems:["/index.html","/index.js","/styles.css","/"]};self.addEventListener("install",e=>{function s(){return caches.open(r.cacheName).then(t=>t.addAll(r.staticCacheItems))}e.waitUntil(s(e).then(()=>self.skipWaiting()))});self.addEventListener("activate",function(e){let s=[r.cacheName];e.waitUntil(caches.keys().then(function(t){return Promise.all(t.map(function(i){if(s.indexOf(i)===-1)return caches.delete(i)}))}).then(()=>self.clients.claim()))});self.addEventListener("fetch",e=>{if(e.request.method==="POST"){fetch(e.request);return}e.respondWith(caches.match(e.request).then(function(s){return s||fetch(e.request).then(function(t){return caches.open(r.cacheName).then(function(i){return i.put(e.request,t.clone()),t})})}).catch(function(s){console.log("Service worker fetch failed.")}))});})();
//# sourceMappingURL=service_worker.js.map
