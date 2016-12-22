/*
 * Site JS entry point
 */
var console = require('./console')
var relExternal = require('./rel-external')
var feeds = require('../_components/Feed/Feeds')

console.init()
relExternal.init()
feeds.init({
  host: 'petegoodman.com/api',
  protocol: 'https://'
})
