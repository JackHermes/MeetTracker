var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1214',
  database: 'MeetTracker'
})
var Teams = ['Greenwood', 'Valinor', 'Rivendell', 'Minas Tirith', 'Shire', 'Erebor'];
var Athletes = ['Legolas Greenleaf','Gandalf Greyhame','Aragorn Arathorn','Boromir Denethor','Gimli Gloin','Pippin Took','Merry Brandybuck','Frodo Baggins','Sam Gamgee']

connection.connect();
// Teams entries
Teams.forEach(function(team) {
  connection.query('insert into Teams (name) values (?)', [team], function(err, results, fields) {
    if (err) throw err
  })
})
// Athletes entries
connection.query('insert into Athletes (athlete, athlete_team) values (?, (select team_id from Teams where name = ?))', ['Legolas Greenleaf','Greenwood'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into Athletes (athlete, athlete_team) values (?, (select team_id from Teams where name = ?))', ['Gandalf Greyhame','Valinor'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into Athletes (athlete, athlete_team) values (?, (select team_id from Teams where name = ?))', ['Aragorn Arathorn','Rivendell'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into Athletes (athlete, athlete_team) values (?, (select team_id from Teams where name = ?))', ['Boromir Denethor','Minas Tirith'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into Athletes (athlete, athlete_team) values (?, (select team_id from Teams where name = ?))', ['Gimli Gloin','Erebor'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into Athletes (athlete, athlete_team) values (?, (select team_id from Teams where name = ?))', ['Pippin Took','Shire'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into Athletes (athlete, athlete_team) values (?, (select team_id from Teams where name = ?))', ['Merry Brandybuck','Shire'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into Athletes (athlete, athlete_team) values (?, (select team_id from Teams where name = ?))', ['Frodo Baggins','Shire'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into Athletes (athlete, athlete_team) values (?, (select team_id from Teams where name = ?))', ['Sam Gamgee','Shire'], function(err, results, fields) {
  if(err) throw err
})

// Event entry
var trackEvents = ['100m', '100m Hurdles', '110m Hurdles', '200m', '400m', '400m Hurdles', '800m', '1500m', '3000m Steeplechase', '5000m', '10000m', '4x100m', '4x400m'];
var fieldEvents = ['High Jump', 'Pole Vault', 'Long Jump', 'Triple Jump', 'Shot Put', 'Discus', 'Hammer', 'Javelin'];
// add track events
trackEvents.forEach(function(event) {
  connection.query('insert into Events (event, units) values (?,?)',[event, 's'], function(err, results, fields) {
    if (err) throw err
  });
});
// add field events
fieldEvents.forEach(function(event) {
  connection.query('insert into Events (event, units) values (?,?)',[event, 'ft'], function(err, results, fields) {
    if (err) throw err
  });
});
 // insert into results (performance, place, points, result_athlete, result_team, result_event) values (23,1,10,(select athlete_id from Athletes where name = "Gandalf"), (select team_id from Teams where name = "Valinor"), (select event_id from Events where name = "Javelin"))

// insert into results (performance, place, points, result_athlete, result_team, result_event) values (23,1,10,2, 2, 2);
//
var resultsQueries = [
  'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from Athletes where athlete = "Legolas Greenleaf"), (select team_id from Teams where name = "Greenwood"), 220.3, 0, 10, 1, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from Athletes where athlete = "Gandalf Greyhame"), (select team_id from Teams where name = "Valinor"), 200.7, 0.2, 8, 2, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from Athletes where athlete = "Aragorn Arathorn"), (select team_id from Teams where name = "Rivendell"), 196.0, 0, 6, 3, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from Athletes where athlete = "Boromir Denethor"), (select team_id from Teams where name = "Minas Tirith"), 150.3, 0, 5, 4, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from Athletes where athlete = "Gimli Gloin"), (select team_id from Teams where name = "Erebor"), 145.3, 0.2, 4, 5, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from Athletes where athlete = "Pippin Took"), (select team_id from Teams where name = "Shire"), 98.5, 3, 3, 6, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from Athletes where athlete = "Merry Brandybuck"), (select team_id from Teams where name = "Shire"), 96.0, 0, 2, 7, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from Athletes where athlete = "Frodo Baggins"), (select team_id from Teams where name = "Shire"), 76.8, 0, 1, 8, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from Athletes where athlete = "Sam Gamgee"), (select team_id from Teams where name = "Shire"), 64.3, 0, 0, 9, NULL)'
];
resultsQueries.forEach(function(insertQuery) {
  connection.query(insertQuery, function(err, results, fields) {
    if (err) console.log(err)
  });
});

connection.end();

// select athlete_id from Athletes where name = "Gandalf", select team_id from Teams where name = "Valinor", select event_id from Events where name = "Javelin")'

// 'insert into results (performance, place, points, result_athlete, result_team, result_event) values (23,1,10,(select athlete_id from Athletes where name = "Gandalf"), (select team_id from Teams where name = "Valinor"), (select event_id from Events where name = "Javelin"))'
