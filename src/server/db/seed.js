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
connection.connect();

// connection.query('drop database MeetTracker');
// connection.query('source ' + path.join(__dirname, './schema.sql'));
connection.query('insert into teams (name) values (?)',['Valinor'],function(err, results, fields) {
  if (err) throw err
})
connection.query('insert into athletes (name, athlete_team) values (?, (select team_id from teams where name = ?))', ['Gandalf','Valinor'], function(err, results, fields) {
  if(err) throw err
})
connection.query('insert into events (name, units) values (?,?)',['Javelin', 'ft'], function(err, results, fields) {
  if (err) throw err
})

// var gandalfID, gandalfTeam, gandalfEvent;
// connection.query('select athlete_id from athletes where name = "Gandalf"', function(err, results, fields) {
//   gandalfID = results;
// })
// connection.query('select team_id from teams where name = "Valinor"', function(err, results, fields) {
//   gandalfTeam = results;
// })
// connection.query('select event_id from events where name = "Javelin"', function(err, results, fields) {
//   gandalfEvent = results;
// })
// console.log(gandalfID,gandalfTeam,gandalfEvent)
 // insert into results (performance, place, points, result_athlete, result_team, result_event) values (23,1,10,(select athlete_id from athletes where name = "Gandalf"), (select team_id from teams where name = "Valinor"), (select event_id from events where name = "Javelin"))

// insert into results (performance, place, points, result_athlete, result_team, result_event) values (23,1,10,2, 2, 2);
//
connection.query('insert into results (performance, place, points, result_athlete, result_team, result_event) values (23,1,10,(select athlete_id from athletes where name = "Gandalf"), (select team_id from teams where name = "Valinor"), (select event_id from events where name = "Javelin"))', function(err, results, fields) {
  if (err) console.log(err)
})

connection.end();

// select athlete_id from athletes where name = "Gandalf", select team_id from teams where name = "Valinor", select event_id from events where name = "Javelin")'