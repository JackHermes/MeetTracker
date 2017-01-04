var express = require('express');
var mysql = require('mysql');
var app = express();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1214'
})


connection.query('USE keepfit');

app.get('/', function(req, res){
  connection.query('SELECT * from workouts', function (err, rows, fields) {
    if (err) throw err
    res.send(rows)
  })
});

app.listen(3000, function(){console.log("listen for 3000");})
// connection.end()
