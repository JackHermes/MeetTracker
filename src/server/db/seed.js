// add team
insert into teams (team_name) values ("Greenwood");
insert into teams (team_name) values ("Valinor");
insert into teams (team_name) values ("Rivendell");

insert into teams (team_name) values ("Minas Tirith");
insert into teams (team_name) values ("Erebor");
insert into teams (team_name) values ("Shire");


  // add w/ points
  // insert into Team_Total_Points values (null, 22);
  // insert into teams (team_name, team_points) values ("MCU", select idTeam_Total_Points from Team_Total_Points where );

// select team
select * from teams where team_name = "BCU";

// add athlete
insert into athletes (athlete_name, team) values ("Legolas Greenleaf", (select idTeams from teams where team_name = "Greenwood"));
insert into athletes (athlete_name, team) values ("Gandalf Greyhame", (select idTeams from teams where team_name = "Valinor"));
insert into athletes (athlete_name, team) values ("Aragorn Arathorn", (select idTeams from teams where team_name = "Rivendell"));

insert into athletes (athlete_name, team) values ("Boromir Denethor", (select idTeams from teams where team_name = "Minas Tirith"));
insert into athletes (athlete_name, team) values ("Gimli Dain", (select idTeams from teams where team_name = "Erebor"));
insert into athletes (athlete_name, team) values ("Pippin Took", (select idTeams from teams where team_name = "Shire"));
insert into athletes (athlete_name, team) values ("Merry Brandybuck", (select idTeams from teams where team_name = "Shire"));
insert into athletes (athlete_name, team) values ("Frodo Baggins", (select idTeams from teams where team_name = "Shire"));
insert into athletes (athlete_name, team) values ("Sam Gamgee", (select idTeams from teams where team_name = "Shire"));

// select athlete
  // based on team
select * from athletes where team = (select idTeams from teams where team_name = "Rivendell");
  // based on name
select * from athletes where athlete_name = "Aragorn Arathorn";

// add points
insert into Team_Total_Points (points) values (10);
// select points
  // team
// select * from Team_Total_Points where idTeam_Total_Points = (select team_points from teams where team_name = "CPC");
  // athlete
// select * from Athlete_Total_Points where idAthlete_Total_Points =

// add event

insert into EventExample (event_name, heat_flight, athlete, athlete_team, performance, wind, points_won, place) values ("javelin", 1, (select idAthletes from athletes where athlete_name = "Legolas Greenleaf"), (select idTeams from teams where team_name = "Greenwood"), 220.3, 0, 10, 1);
insert into EventExample (event_name, heat_flight, athlete, athlete_team, performance, wind, points_won, place) values ("javelin", 1, (select idAthletes from athletes where athlete_name = "Gandalf Greyhame"), (select idTeams from teams where team_name = "Valinor"), 200.7, 0.2, 8, 2);
insert into EventExample (event_name, heat_flight, athlete, athlete_team, performance, wind, points_won, place) values ("javelin", 1, (select idAthletes from athletes where athlete_name = "Aragorn Arathorn"), (select idTeams from teams where team_name = "Rivendell"), 196.0, 0, 6, 3);

insert into EventExample (event_name, heat_flight, athlete, athlete_team, performance, wind, points_won, place) values ("javelin", 1, (select idAthletes from athletes where athlete_name = "Boromir Denethor"), (select idTeams from teams where team_name = "Minas Tirith"), 150.3, 0, 5, 4);
insert into EventExample (event_name, heat_flight, athlete, athlete_team, performance, wind, points_won, place) values ("javelin", 1, (select idAthletes from athletes where athlete_name = "Gimli Dain"), (select idTeams from teams where team_name = "Erebor"), 145.3, 0.2, 4, 5);
insert into EventExample (event_name, heat_flight, athlete, athlete_team, performance, wind, points_won, place) values ("javelin", 1, (select idAthletes from athletes where athlete_name = "Pippin Took"), (select idTeams from teams where team_name = "Shire"), 98.5, 3, 6, 6);
insert into EventExample (event_name, heat_flight, athlete, athlete_team, performance, wind, points_won, place) values ("javelin", 1, (select idAthletes from athletes where athlete_name = "Merry Brandybuck"), (select idTeams from teams where team_name = "Shire"), 96.0, 0, 2, 7);
insert into EventExample (event_name, heat_flight, athlete, athlete_team, performance, wind, points_won, place) values ("javelin", 1, (select idAthletes from athletes where athlete_name = "Frodo Baggins"), (select idTeams from teams where team_name = "Shire"), 76.8, 0, 1, 8);
insert into EventExample (event_name, heat_flight, athlete, athlete_team, performance, wind, points_won, place) values ("javelin", 1, (select idAthletes from athletes where athlete_name = "Sam Gamgee"), (select idTeams from teams where team_name = "Shire"), 64.3, 0, 0, 9);

// Select meaningful results data
// athletes:
select athletes.athlete_name, teams.team_name from athletes, teams where idAthletes in (select athlete from EventExample) and idTeams in (select athlete_team from EventExample);

select athletes.athlete_name, teams.team_name from athletes
  inner join teams on athletes.team=teams.idTeams;

select athletes.athlete_name, teams.team_name

// TRUNCATE TABLE 100m;
// use races
//
// INSERT into 100m (athlete, time, school, points)
// values ('Data Soong', 11.02, 'TFA', 10);
//
// INSERT into 100m (athlete, time, school, points)
// values ('William T. Riker', 11.25, 'RotS', 8);
//
// INSERT into 100m (athlete, time, school, points)
// values ('Jeordi LaForge', 11.27, 'ESB', 6);
//
// INSERT into 100m (athlete, time, school, points)
// values ('Deeana Troi', 11.40, 'RotJ', 4);
//
// INSERT into 100m (athlete, time, school, points)
// values ('Jean-Luc Picard', 11.82, 'ANH', 3);
//
// INSERT into 100m (athlete, time, school, points)
// VALUES ('Worf (IR)', 12.00, 'TPM', 3);