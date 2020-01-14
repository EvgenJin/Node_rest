'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.renameColumn(
      'Orders',
      'customer',
      'customer_id'
    );
  }
}