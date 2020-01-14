'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    date: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    state: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};