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
var teams = ['Greenwood', 'Valinor', 'Rivendell', 'Minas Tirith', 'Shire', 'Erebor'];
var athletes = ['Legolas Greenleaf','Gandalf Greyhame','Aragorn Arathorn','Boromir Denethor','Gimli Dain','Pippin Took','Merry Brandybuck','Frodo Baggins','Sam Gamgee']

connection.connect();
// Teams entries
teams.forEach(function(team) {
  connection.query('insert into teams (name) values (?)', [team], function(err, results, fields) {
    if (err) throw err
  })
})
// Athletes entries
connection.query('insert into athletes (athlete, athlete_team) values (?, (select team_id from teams where name = ?))', ['Legolas Greenleaf','Greenwood'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into athletes (athlete, athlete_team) values (?, (select team_id from teams where name = ?))', ['Gandalf Greyhame','Valinor'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into athletes (athlete, athlete_team) values (?, (select team_id from teams where name = ?))', ['Aragorn Arathorn','Rivendell'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into athletes (athlete, athlete_team) values (?, (select team_id from teams where name = ?))', ['Boromir Denethor','Minas Tirith'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into athletes (athlete, athlete_team) values (?, (select team_id from teams where name = ?))', ['Gimli Dain','Erebor'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into athletes (athlete, athlete_team) values (?, (select team_id from teams where name = ?))', ['Pippin Took','Shire'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into athletes (athlete, athlete_team) values (?, (select team_id from teams where name = ?))', ['Merry Brandybuck','Shire'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into athletes (athlete, athlete_team) values (?, (select team_id from teams where name = ?))', ['Frodo Baggins','Shire'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into athletes (athlete, athlete_team) values (?, (select team_id from teams where name = ?))', ['Sam Gamgee','Shire'], function(err, results, fields) {
  if(err) throw err
})

// Event entry
connection.query('insert into events (event, units) values (?,?)',['Javelin', 'ft'], function(err, results, fields) {
  if (err) throw err
})
 // insert into results (performance, place, points, result_athlete, result_team, result_event) values (23,1,10,(select athlete_id from athletes where name = "Gandalf"), (select team_id from teams where name = "Valinor"), (select event_id from events where name = "Javelin"))

// insert into results (performance, place, points, result_athlete, result_team, result_event) values (23,1,10,2, 2, 2);
//
var resultsQueries = [
  'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from athletes where athlete = "Legolas Greenleaf"), (select team_id from teams where name = "Greenwood"), 220.3, 0, 10, 1, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from athletes where athlete = "Gandalf Greyhame"), (select team_id from teams where name = "Valinor"), 200.7, 0.2, 8, 2, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from athletes where athlete = "Aragorn Arathorn"), (select team_id from teams where name = "Rivendell"), 196.0, 0, 6, 3, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from athletes where athlete = "Boromir Denethor"), (select team_id from teams where name = "Minas Tirith"), 150.3, 0, 5, 4, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from athletes where athlete = "Gimli Dain"), (select team_id from teams where name = "Erebor"), 145.3, 0.2, 4, 5, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from athletes where athlete = "Pippin Took"), (select team_id from teams where name = "Shire"), 98.5, 3, 6, 6, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from athletes where athlete = "Merry Brandybuck"), (select team_id from teams where name = "Shire"), 96.0, 0, 2, 7, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from athletes where athlete = "Frodo Baggins"), (select team_id from teams where name = "Shire"), 76.8, 0, 1, 8, NULL)',
 'insert into Results (result_event, heat_number, result_athlete, result_team, performance, wind, points, place, result_meet) values (1, 1, (select athlete_id from athletes where athlete = "Sam Gamgee"), (select team_id from teams where name = "Shire"), 64.3, 0, 0, 9, NULL)'
];
resultsQueries.forEach(function(insertQuery) {
  connection.query(insertQuery, function(err, results, fields) {
    if (err) console.log(err)
  });
})

connection.end();

// select athlete_id from athletes where name = "Gandalf", select team_id from teams where name = "Valinor", select event_id from events where name = "Javelin")'

// 'insert into results (performance, place, points, result_athlete, result_team, result_event) values (23,1,10,(select athlete_id from athletes where name = "Gandalf"), (select team_id from teams where name = "Valinor"), (select event_id from events where name = "Javelin"))'