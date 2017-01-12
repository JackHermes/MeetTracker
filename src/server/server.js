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
connection.query('USE meet');
app.get('/athletes', function(req, res){
  connection.query('SELECT * from athletes', function (err, rows, fields) {
    if (err) throw err
    res.send(rows)
  });
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
})

app.post('/seed', function(req, res) {
  connection.query(query);
})

app.post('/athlete', function(req, res) {
  console.log(req.body);
  let data = req.body;
  let query = `INSERT into Athletes (athlete_name, team, athlete_points) VALUES (?,?,?);`;

  connection.query(query, ['jack', 2, 400]);

  console.log(data)
  res.send('POST for 100m received.');
  // res.json(req.body);
});

app.listen(1337, function () {
  console.log('Listening on port 1337.');
});