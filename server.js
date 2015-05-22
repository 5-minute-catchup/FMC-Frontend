var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var markers = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/app/index.html');
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

http.listen(3000, function(){
  console.log('listening on *:3000');
});
