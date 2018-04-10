var emailPattern = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
var config = require('config');
var mysql = require('mysql')
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

var connection = mysql.createConnection(
	config.get('dbConfig')
);

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

app.post('/subscribe', cors(), function(req, res) {
	var email = req.body.email;

	if (!emailPattern.test(email)) {
		res.status(400).send('Please enter a valid email');
		return;
	}

	var existsQuery = 'SELECT * FROM subscribers WHERE email = ' + connection.escape(email);
	
	connection.query(existsQuery, function (error, results, fields) {
	  if (error) throw error;
	  
	  if (results.length) {
	  	res.send('Already subscribed!');
	  } else {
	  	var insertQuery = 'INSERT INTO subscribers (email) VALUES ('+connection.escape(email)+')';
			
			connection.query(insertQuery, function(error, results, fields) {
				if (error) throw error;
			});
			
			res.send('Thank you for subscribing!');
	  }
	});
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});