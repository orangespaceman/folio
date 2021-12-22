/*!
 * Hello there!
 *
 * If you are keen to see the source JS files, take a look at the github repo:
 *
 * https://github.com/orangespaceman/folio
 *
 */ !(function () {
  "use strict";
  var e = "v1.0.1::",
    t = [
      "/assets/fonts/raleway/raleway-light.woff2",
      "/assets/fonts/raleway/raleway-medium.woff2",
      "/assets/images/404.gif",
    ],
    n = ["/assets/css/site.css", "/assets/js/site.js", "/", "/offline/"];
  self.addEventListener("install", function (e) {
    e.waitUntil(
      caches
        .open("v1.0.1::offline")
        .then(function (e) {
          return e.addAll(t), e.addAll(n);
        })
        .then(function () {
          self.skipWaiting();
        })
    );
  }),
    self.addEventListener("activate", function (t) {
      t.waitUntil(
        caches
          .keys()
          .then(function (t) {
            return Promise.all(
              t
                .filter(function (t) {
                  return 0 !== t.indexOf(e);
                })
                .map(function (e) {
                  caches.delete(e);
                })
            );
          })
          .then(function () {
            self.clients.claim();
          })
      );
    }),
    self.addEventListener("fetch", function (e) {
      var t = e.request;
      "GET" === t.method &&
        e.respondWith(
          fetch(t)
            .then(function (e) {
              return e;
            })
            .catch(function () {
              return -1 !== t.headers.get("Accept").indexOf("text/html")
                ? caches.match("/offline/")
                : caches.match(t).then(function (e) {
                    return e;
                  });
            })
        );
    });
})();
