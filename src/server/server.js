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

  connection.query('select Results.performance, Results.place, Results.points, Results.wind, Results.heat_number, Athletes.athlete, Teams.name, Events.event, Events.units from Results inner join Athletes on Results.result_athlete=Athletes.athlete_id inner join Teams on Results.result_team=Teams.team_id inner join Events on Results.result_event=Events.event_id', function(err, results, fields){
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
  var athleteName = req.body.Athlete;
  var athleteTeam = req.body.Team;
  if(!(athleteName && athleteTeam)) {
    return;
  }
  // var query = `INSERT into Athletes (athlete, athlete_team) VALUES (?, (SELECT team_id from teams where name = (?) ))`;
  //
  // connection.query(query, [athleteName, athleteTeam]);

  res.send('POST for athlete received.');
  // res.json(req.body);
});

app.post('/add/team', function(req, res) {
  console.log("Received:",req.body);
  var teamName = req.body.Name;
  var query = `INSERT into Teams (name) VALUES (?)`;

  connection.query(query, [teamName]);

  res.send('POST for athlete received.');
  // res.json(req.body);
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
})
app.listen(1337, function () {
  console.log('Listening on port 1337.');
});
