/*!
 * Hello there!
 *  
 * If you are keen to see the source JS files, take a look at the github repo:
 *  
 * https://github.com/thegingerbloke/folio
 *  
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser, serviceworker */

/*
 * Service worker - offline page
 */



var cacheName = 'offline'
var cacheVersion = 'v1.0.0::'
var cacheFiles = {
  optional: [
    '/assets/fonts/raleway/raleway-light.woff2',
    '/assets/fonts/raleway/raleway-medium.woff2',
    '/assets/images/404.gif'
  ],
  required: [
    '/assets/css/site.css',
    '/assets/js/site.js',
    '/',
    '/offline/'
  ]
}

function updateCache () {
  return caches.open(cacheVersion + cacheName)
    .then(function (cache) {
      cache.addAll(cacheFiles.optional)
      return cache.addAll(cacheFiles.required)
    })
}

function clearCache () {
  return caches.keys()
    .then(function (keys) {
      return Promise.all(keys
        .filter(function (key) { return key.indexOf(cacheVersion) !== 0 })
        .map(function (key) { caches.delete(key) })
      )
    })
}

self.addEventListener('install', function (event) {
  event.waitUntil(updateCache().then(function () { self.skipWaiting() }))
})

self.addEventListener('activate', function (event) {
  event.waitUntil(clearCache().then(function () { self.clients.claim() }))
})

self.addEventListener('fetch', function (event) {
  var request = event.request
  if (request.method !== 'GET') {
    return
  }
  event.respondWith(
    fetch(request)
      .then(function (response) {
        return response
      })
      .catch(function () {
        if (request.headers.get('Accept').indexOf('text/html') !== -1) {
          return caches.match('/offline/')
        }
        return caches.match(request)
          .then(function (response) {
            return response
          })
      })
  )
})


/***/ })

/******/ });