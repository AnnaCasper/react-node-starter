'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function() {
		return queryInterface.bulkInsert('Tests', [
		  {
			text: 'Here is some test data!',
			createdAt: new Date(),
			updatedAt: new Date()
		  },
		])
	})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tests');
  }
};