var express = require('express');
var app = express();

var path = require('path');

// app.use(express.static(path.join(__dirname, '../../src')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/', function (req, res) {
  res.send('yyy');
})
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.listen(1337, function () {
  console.log('Listening on port 1337.');
});