/*
 * Init all feeds
 */

'use strict';

var http = require('http');

function init () {

    http.get({path: '/403'}, function (res) {
        //var div = document.getElementById('result');
        //div.innerHTML += 'GET /beep<br>';

        res.on('data', function (buf) {
            console.log('data', buf);
            //div.innerHTML += buf;
        });

        res.on('end', function () {
            console.log('end');
            //div.innerHTML += '<br>__END__';
        });
    });
}

module.exports = {
    init: init
};
