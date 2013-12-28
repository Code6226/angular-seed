'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl2', [function($scope) {

  }]);

var MainController = function($scope){
}

var HomeController = function($scope){
    $scope.dog = 'cat';
}


var ChatController = function($scope, socket){
    $scope.enteredText = '';
    $scope.chatLines = [
        {username: 'George', text: 'Hey'}
    ];

    socket.on('userSpeaks', function (data) {
        $scope.$apply(function(){
            console.log(data);
            $scope.chatLines.push(data);
        });
    });

    $scope.sendChat = function(){
        socket.emit('sendChat',{username: 'User#256', text: $scope.enteredText})
        $scope.enteredText = '';
    }
}