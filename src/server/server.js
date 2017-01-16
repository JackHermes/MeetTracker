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

  connection.query('select results.performance, results.place, results.points, results.wind, results.heat_number, athletes.athlete, teams.name, events.event, events.units from results inner join athletes on results.result_athlete=athletes.athlete_id inner join teams on results.result_team=teams.team_id inner join events on results.result_event=events.event_id', function(err, results, fields){
      if(err) throw err
      console.log(results);
      res.send(results)
    });
});

// app.post('/seed', function(req, res) {
//   connection.query(query);
// })

app.post('/add/athlete', function(req, res) {
  console.log("Received:",req.body);
  let athleteName = req.body.athlete;
  let athleteTeam = req.body.team;
  let query = `INSERT into Athletes (athlete, athlete_team) VALUES (?, (SELECT team_id from teams where name = (?) ))`;

  // connection.query(query, [athleteName, athleteTeam]);

  res.send('POST for athlete received.');
  // res.json(req.body);
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
})
app.listen(1337, function () {
  console.log('Listening on port 1337.');
});