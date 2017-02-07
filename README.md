# Meet Tracker

> A Tool for scoring Track and Field Meets


   __Created (in about 3 weeks) by__: [Jordan M. Scholten](https://github.com/JackHermes)

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Creating the Database](#creating-the-database)
    1. [Starting the App](#starting-the-app)
    1. [Roadmap](#roadmap)
1. [Usage Notes](#usage-notes)


## Requirements
Be sure you have Node ^6.9

Global installs:
- eslint cli
- karma cli
- grunt cli
- mysql
- nodemon
- webpack-dev-server

Installed with ``npm install``:
- babel-core: ^6.21.x
- babel-loader: ^6.2.x
- babel-preset-es2015: ^6.18.x
- babel-preset-react: ^6.16.x
- body-parser: ^1.15.x
- chai: ^3.5.x
- eslint: ^3.12.x
- eslint-plugin-react: ^6.8.x
- express: ^4.14.x
- googlemaps: ^1.12.x
- grunt: ^1.0.x
- karma: ^1.3.x
- karma-babel-preprocessor: ^6.0.x
- karma-chai: ^0.1.x
- karma-chrome-launcher: ^2.0.x
- karma-cli: ^1.0.x
- karma-mocha: ^1.3.x
- karma-sourcemap-loader: ^0.3.x
- karma-webpack: ^1.8.x
- mocha: ^3.2.x
- mysql: ^2.12.x
- react: ^15.4.x
- react-bootstrap: ^0.30.x
- react-dom: ^15.4.x
- react-router: ^3.0.x
- request: ^2.79.x
- webpack: ^1.14.x
- webpack-dev-server: ^1.16.x

## Development

You'll need to adjust the mysql password and user information in [server.js](./src/server/server.js) to match your system's configuration.

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g eslint (/karma-cli/grunt-cli/mysql/nodemon/etc)
npm install
```

### Creating the Database

Log in to MySQL with ``mysql -u USERNAME -p`` followed by entering your password.

Once in the MySQL cli, enter ``source /ABSOLUTE/PATH/TO/src/server/db/schema.sql`` to create the database. Then from the project's root: ``node src/server/db/seed.js`` to seed the database with data. This also adds all event names to the appropriate table.

### Starting the App
Create a bundled file and start the server on [localhost](localhost:80):

```sh
webpack
nodemon src/server/server.js
```

Use ``webpack -w`` to watch for changes to bundle.

### Roadmap

View the project roadmap [here](https://github.com/JackHermes/MeetTracker/issues)

## Usage Notes

> When adding event results, do be sure the team and athlete both exist first, otherwise the result won't be added.
