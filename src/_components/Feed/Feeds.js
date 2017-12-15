/*
 * Init all feeds
 */

"use strict";

/**
 * Module imports
 */
var Feed = require("./Feed.js");

/**
 * Initialisation method - find all Feed elements
 *
 * @param {object} options - initialisation options
 */
function init(options) {
  var feedEls = document.querySelectorAll(".js-feed");

  Array.prototype.forEach.call(feedEls, function(feedEl) {
    var feed = new Feed(feedEl, options);
    feed.init();
  });
}

/**
 * Return public methods
 */
module.exports = {
  init: init
};
