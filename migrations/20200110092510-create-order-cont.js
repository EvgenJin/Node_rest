'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Order_conts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        allowNull: false,
        type: Sequelize.NUMBER
      },
      product_id: {
        allowNull: false,
        type: Sequelize.NUMBER
      },
      count: {
        allowNull: false,
        type: Sequelize.NUMBER
      },
      price: {
        allowNull: false,
        type: Sequelize.NUMBER
      },
      amount: {
        type: Sequelize.NUMBER
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
    return queryInterface.dropTable('Order_conts');
  }
};