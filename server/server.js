// Server
var _ = require('lodash');
var app = require('express')()
    , http = require('http')
    , server = http.createServer(app)
    , io = require('socket.io').listen(server)

server.listen(8060);

io.configure(function(){ //https://github.com/LearnBoost/Socket.IO/wiki/Configuring-Socket.IO
    io.set('log level', 1);
});

io.sockets.on('connection', function(socket){
    console.log('new connection just now!')
    socket.on('sendChat', function (data) {
        console.log(data.username +' spoke!')
        io.sockets.emit('addChatline', data);
    });

    socket.on('userJoin', function(data){
        console.log(data.username +' joined the chat.')
        io.sockets.emit('addChatline', {
            username: data.username,
            eventType: 'join'
        })
    })
});