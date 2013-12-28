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
    $scope.myUsername = '';
    $scope.chatLines = [
        {username: 'George', text: 'Hey'}
    ];

    socket.on('addChatline', function (data) {
        $scope.$apply(function(){
            console.log(data);
            $scope.chatLines.push(data);
        });
    });

    $scope.sendChat = function(text){
        socket.emit('sendChat',{
            username: $scope.myUsername,
            text: text
        })
    }

    $scope.setUsername = function(username){
        $scope.myUsername = username;
        socket.emit('userJoin', {
            username: $scope.myUsername
        })
    }
}