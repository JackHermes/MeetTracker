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

app.post('/seed', function(req, res) {
  // 'source "C:/Users/jack_/Desktop/Hack.js/Thesis/src/server/db/seed.sql"'
  // // let seedFile = path.resolve(__dirname, 'db/seed.sql');
  // let query = "INSERT into 100m (athlete, time, school, points)
  // values ('Data Soong', 11.02, 'TFA', 10);
  //
  // INSERT into 100m (athlete, time, school, points) values ('William T. Riker', 11.25, 'RotS', 8);
  //
  // INSERT into 100m (athlete, time, school, points)
  // values ('Jeordi LaForge', 11.27, 'ESB', 6);
  //
  // INSERT into 100m (athlete, time, school, points)
  // values ('Deeana Troi', 11.40, 'RotJ', 4);
  //
  // INSERT into 100m (athlete, time, school, points)
  // values ('Jean-Luc Picard', 11.82, 'ANH', 3);";
  connection.query(query);
})

app.post('/100m', function(req, res) {
  // connection.query('INSERT into 100m values ')
  console.log(req.body);
  let data = req.body;
  if(data.delete) {
    connection.query('truncate table 100m');
  } else {
  let query = `INSERT into 100m (athlete, time, school, points) VALUES ('${data.athlete}', ${data.time}, '${data.school}', ${data.points});`;
  connection.query(query);
  }
  console.log(data)
  res.send('POST for 100m received.');
  // res.json(req.body);
});

app.listen(1337, function () {
  console.log('Listening on port 1337.');
});