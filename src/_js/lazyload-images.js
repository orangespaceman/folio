/*
 * Lazyload images
 */

'use strict'

var layzr = require('layzr.js')

function init () {
  var instance = layzr({
    threshold: 20
  })

  instance
    .update()
    .check()
    .handlers(true)
}

module.exports = {
  init: init
}
