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
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(bodyParser.json());
// Communicate with db
connection.query('USE MeetTracker');

app.get('/results', function(req, res){

  var performance, points, place, athlete, team;

  connection.query('SELECT * from Events', function (err, rows, fields) {
    if (err) throw err
    performance = rows.map(function(item) {
      return item.performance;
    });
    points = rows.map(function(item) {
      return item.points_won;
    })
    place = rows.map(function(item) {
      return item.place;
    })
  });
  connection.query('select athletes.name, teams.name from athletes inner join teams on athletes.athlete_team=teams.team_id order by athletes.athlete_id;', function(err, rows, fields){
    athlete = rows.map(function(item) {
      return item.athlete_name;
    });
    team = rows.map(function(item) {
      return item.team_name;
    });
    console.log(performance, points, place, athlete, team)
    res.send([place, athlete, performance, team, points])
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