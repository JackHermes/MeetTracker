var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1214'
})
// app.use(express.static(path.join(__dirname, '../../src')));
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(bodyParser.json());
// Communicate with db
connection.query('USE races');
app.get('/100m', function(req, res){
  connection.query('SELECT * from 100m', function (err, rows, fields) {
    if (err) throw err
    res.send(rows)
  });
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
})

app.post('/100m', function(req, res) {
  // connection.query('INSERT into 100m values ')
  console.log(req.body);
  res.send('POST for 100m received.')
  // res.json(req.body);
});

app.listen(1337, function () {
  console.log('Listening on port 1337.');
});