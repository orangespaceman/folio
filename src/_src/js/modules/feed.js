/*
 * Feed object
 */

'use strict';

/**
 * Module imports
 */
var http = require('http');
var moment = require('moment');

/**
 * Feed object
 * @constructor
 *
 * @param {element} feedEl - reference to the Feed DOM element
 * @param {object} options - initialisation options
 */
var Feed = function (feedEl, options) {
    this.feedEl = feedEl;
    this.options = options;
};

/**
 * Initialisation method
 */
Feed.prototype.init = function () {
    var uri = this.feedEl.dataset.uri;
    var loadingMessage = this.feedEl.dataset.loading;

    // hide message
    this.hideMessage();

    // create loader
    this.createLoader(loadingMessage);

    // request data
    this.requestData(this.options.host, uri);
};

/**
 * Hide default meessage in the feed element
 */
Feed.prototype.hideMessage = function () {
    var feedMessage = this.feedEl.querySelector('.Feed-message');
    if (feedMessage) {
        feedMessage.classList.add('u-Hidden');
    }
};

/**
 * Create loader element within the feed element
 *
 * @param {string} loadingMessage - The loading message to display
 */
Feed.prototype.createLoader = function (loadingMessage) {
    var loader = document.createElement('em');
    loader.classList.add('Feed-loader');

    var loaderText = document.createTextNode(loadingMessage);
    loader.appendChild(loaderText);
    this.feedEl.insertBefore(loader, this.feedEl.firstChild);
};

/**
 * Request data
 *
 * @param {string} host - the API host
 * @param {string} uri - the API request uri
 */
Feed.prototype.requestData = function (host, uri) {
    var self = this;

    http.get({
        host: host,
        path: uri
    }, function (res) {
        var buffer = '';
        res.on('data', function (data) {
            buffer += data;
        });
        res.on('end', function () {
            self.parseData(buffer);
        });
    });
};

/**
 * Parse API data
 *
 * @param {string} data - the raw API response
 */
Feed.prototype.parseData = function (data) {
    var self = this;

    this.feedEl.querySelector('.Feed-loader').classList.add('u-Hidden');

    var items = JSON.parse(data);
    var templateEl = this.feedEl.querySelector('.js-feed-template');
    var template;

    // reverse the array of data -
    // we prepend each item to the DOM so start with the last and work backwards
    items.reverse();

    // append each API item to the DOM
    items.forEach(function (item) {
        template = templateEl.cloneNode(true);
        self.displayData(item, template);
    });
};

/**
 * Display API data
 *
 * @param {object} item - an individual item of data from the API
 * @param {element} template - a cloned template node to fill and append to DOM
 */
Feed.prototype.displayData = function (item, template) {

    // search for items that match API data fields
    for (var field in item) {

        // set text content
        var el = template.querySelector('[data-content="' + field + '"]');
        if (el) {

            // perform transforms on the data?
            var transform = el.dataset.transform;
            var content = item[field];

            switch (transform) {
                case 'moment':
                    content = moment(new Date(content)).fromNow();
                    break;

                // set playcount widths for lastfm artist list
                // don't insert any text into the element
                case 'playcount-width':
                    el.style.width = content + '%';
                    content = '';
                    break;
            }

            el.textContent = content;
        }

        // set attributes - map to API field names
        var attrs = ['href', 'src', 'alt', 'title'];
        for (var attr in attrs) {
            var selector = '[data-' + attrs[attr] + '="' + field + '"]';
            el = template.querySelector(selector);
            if (el) {
                el.setAttribute(attrs[attr], item[field]);
            }
        }
    }

    // append to DOM
    template.classList.remove('u-Hidden');
    this.feedEl.insertBefore(template, this.feedEl.firstChild);
};

module.exports = Feed;
