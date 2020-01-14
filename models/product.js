'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    descr: DataTypes.STRING,
    invent_num: DataTypes.NUMBER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};