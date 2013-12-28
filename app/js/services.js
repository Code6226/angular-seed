'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    factory('socket',function($location){
        var webSocketAddress = 'http://'+window.location.hostname+':8060';
        var socket = io.connect(webSocketAddress, {
            reconnect: false
        });
        return socket;
    });