const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// Answer API requests.
app.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to the React-Node-Starter Api!',
}));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
  });

module.exports = app;