var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require("path")

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at 3000');

});

var port = process.env.PORT || 3000

module.exports = server;