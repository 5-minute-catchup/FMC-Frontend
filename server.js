var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000
var path = require("path")
var http = require('http').Server(app);
var markers = [];
var io = require('socket.io').listen(server);

// http.listen(3000, function(){
//   console.log('five minute catch up is on port 3000');
// });

server.listen(process.env.PORT || 3000);

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.get('/mapjs', function(req, res){
  res.sendFile(__dirname + '/app/scripts/map.js');
});

io.on('connection', function(socket){
    console.log('a user connected');
  
    socket.on('marker', function(data) {
      data.socketId = socket.id;
      
      markers[socket.id] = data;
  
  console.log('marker latitude: ' + data.lat + ', marker longitude:' + data.lng);
    socket.broadcast.emit('show-marker', data);
    });

});


module.exports = server;
