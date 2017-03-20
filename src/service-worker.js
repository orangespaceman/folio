/*!
 * Hello there!
 *  
 * If you are keen to see the source JS files, take a look at the github repo:
 *  
 * https://github.com/thegingerbloke/folio
 *  
 */
!function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(){return caches.open(a+i).then(function(e){return e.addAll(r.optional),e.addAll(r.required)})}function s(){return caches.keys().then(function(e){return Promise.all(e.filter(function(e){0!==e.indexOf(a)}).map(function(e){caches.delete(e)}))})}var i="offline",a="v1.0.0::",r={optional:["/assets/fonts/raleway/raleway-light.woff2","/assets/fonts/raleway/raleway-medium.woff2","/assets/images/404.gif"],required:["/assets/css/site.css","/assets/js/site.js","/","/offline/"]};self.addEventListener("install",function(e){e.waitUntil(n().then(function(){self.skipWaiting()}))}),self.addEventListener("activate",function(e){e.waitUntil(s().then(function(){self.clients.claim()}))}),self.addEventListener("fetch",function(e){var t=e.request;"GET"===t.method&&e.respondWith(fetch(t).then(function(e){return e}).catch(function(){return t.headers.get("Accept").indexOf("text/html")!==-1?caches.match("/offline/"):caches.match(t).then(function(e){return e})}))})}]);