/*
 * Site JS entry point
 */
var comment = require('./modules/comment.js');
var relExternal = require('./modules/rel-external.js');
var feeds = require('./modules/feeds.js');

comment.init();
relExternal.init();
feeds.init({
    host: 'petegoodman.com/api',
    protocol: 'https://'
});
