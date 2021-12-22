/*
 * Site JS entry point
 */

var lazyload = require("./lazyload-images");
var consoleMessage = require("./console");
var relExternal = require("./rel-external");
var comrades = require("../_components/Comrades/Comrades");

lazyload.init();
consoleMessage.init();
comrades.init();
relExternal.init();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
