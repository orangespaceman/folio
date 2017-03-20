/*
 * Site JS entry point
 */

var lazyload = require('./lazyload-images')
var consoleMessage = require('./console')
var relExternal = require('./rel-external')
var comrades = require('../_components/Comrades/Comrades')
var feeds = require('../_components/Feed/Feeds')

lazyload.init()
consoleMessage.init()
comrades.init()
relExternal.init()
feeds.init({
  host: 'api.petegoodman.com',
  protocol: 'https://'
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js')
  })
}
