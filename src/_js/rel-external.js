/*
 * Open links with rel="external" attributes in a new window
 */

'use strict'

function init () {
  var anchors = document.getElementsByTagName('a')
  for (var counter = 0; counter < anchors.length; counter++) {
    var a = anchors[counter]
    if (a.getAttribute('href') && a.getAttribute('rel') === 'external') {
      a.target = '_blank'
    }
  }
}

module.exports = {
  init: init
}
