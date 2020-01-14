'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_cont = sequelize.define('Order_cont', {
    order_id: DataTypes.NUMBER,
    product_id: DataTypes.NUMBER,
    count: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
    amount: DataTypes.NUMBER
  }, {});
  Order_cont.associate = function(models) {
    // associations can be defined here
  };
  return Order_cont;
};