var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1214'
})
// app.use(express.static(path.join(__dirname, '../../src')));
app.use(express.static(path.join(__dirname, '../../dist')));

// Communicate with db
connection.query('USE keepfit');
app.get('/workouts', function(req, res){
  connection.query('SELECT * from workouts', function (err, rows, fields) {
    if (err) throw err
    res.send(rows)
  })
});

app.get('/', function (req, res) {
  res.send('yyy');
})
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.listen(1337, function () {
  console.log('Listening on port 1337.');
});