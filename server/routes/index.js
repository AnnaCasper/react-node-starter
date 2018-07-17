const testController = require('../controllers').test;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the React-Node-Starter API!',
  }));

//   test
  app.get('/api/test', testController.get);
};