const testController = require('../controllers').test;

module.exports = (app) => {
	console.log('in routes')
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the React-Node-Starter API!',
	}));


	// cors middleware
	app.use((req, res, next) => {if (req.method === 'OPTIONS') {
		var headers = {};
		// IE8 does not allow domains to be specified, just the *
		headers["Access-Control-Allow-Origin"] = "*";
		headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
		headers["Access-Control-Allow-Credentials"] = false;
		headers["Access-Control-Max-Age"] = '86400'; // 24 hours
		headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept, token";
		res.writeHead(200, headers);
		res.end();
		} else {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
		next();
		}
	});

	//  test
	app.get('/api/test', testController.get);
};