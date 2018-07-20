const Test = require('../models').Test;

module.exports = {
  get(req, res) {
	  console.log('in controller')
    return Test
      .findAll()
      .then(test => res.status(201).send(test))
	  .catch(error => 
		{
			console.log(error)
			res.status(400).send(error)});
  },
};