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

  res.send('POST for team received.');
  // res.json(req.body);
});

app.post('/add/results', function(req, res) {
  console.log('Received Results: ', req.body);
  var ascending = function(a,b) {return a.Performance-b.Performance;};
  var descending = function(a,b) {return b.Performance-a.Performance;};
  var results = req.body;

  results[0].Event === 'Field' ? results.sort(descending) : results.sort(ascending);

  console.log('Results sorted', results);
  // TODO: check length to stop appropriately, avoiding undefined errs
  results[0].points = 10;
  results[1].points = 8;
  results[2].points = 6;
  // results[3].points = 5;
  // results[4].points = 4;
  // results[5].points = 3;
  // results[6].points = 2;
  // results[7].points = 1;
  console.log('Results with points', results);

  var query = 'insert into Results (result_event, result_athlete, result_team, performance, points, place) values ((select event_id from events where event = ?), (select athlete_id from athletes where athlete = ?), (select team_id from teams where name = ?), ?, ?, ?)';
  var place = 1;

  results.forEach(function(result) {
    var event = result.Event;
    var athlete = result.Athlete;
    var team = result.Team;
    var performance = result.Performance;
    var points = result.Points || null;
    connection.query(query,[event,athlete,team,performance,points,place], function(err, results, fields) {if (err) console.log(err);})
    place++;
  })

})

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
})
app.listen(80, function () {
  console.log('Listening on port 80.');
});
