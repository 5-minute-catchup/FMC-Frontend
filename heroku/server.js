// 'use strict';

// var statik = require('statik');
// var server = statik.createServer('.');
// server.listen();


var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var server = require('http').createServer(app);
var path = require("path")

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response){
 response.sendFile(path.join(__dirname, '../', "app/index.html"));
})

server.listen(3000, function(){
 console.log("Server listening on port 3000");
});

module.exports = server;
