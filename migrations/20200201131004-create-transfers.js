'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transfers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      store_from: {
        type: Sequelize.INTEGER
      },
      store_to: {
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      tr_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transfers');
  }
};