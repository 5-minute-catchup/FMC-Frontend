var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require("path")
var port = process.env.PORT || 3000

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/fbtest.html'));
});

var server = app.listen(port, function () {

  console.log('Example app listening at 3000');

});

module.exports = server;
