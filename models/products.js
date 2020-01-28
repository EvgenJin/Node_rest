'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    model: DataTypes.STRING,
    manufacturer_id: DataTypes.INTEGER,
    serial_num: DataTypes.STRING,
    inventory_num: DataTypes.STRING,
    ip_addr: DataTypes.STRING,
    store_id: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};