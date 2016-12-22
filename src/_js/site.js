/*
 * Site JS entry point
 */

var lazyload = require('./lazyload-images')
var consoleMessage = require('./console')
var relExternal = require('./rel-external')
var feeds = require('../_components/Feed/Feeds')

lazyload.init()
consoleMessage.init()
relExternal.init()
feeds.init({
  host: 'petegoodman.com/api',
  protocol: 'https://'
})
