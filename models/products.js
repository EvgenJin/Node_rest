'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    model: DataTypes.STRING,
    manufacturer_id: DataTypes.INTEGER,
    serial_num: DataTypes.STRING,
    inventory_num: DataTypes.STRING,
    ip_addr: DataTypes.STRING,
    store_id: DataTypes.INTEGER
    // type_id: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    Products.belongsTo(models.Transfers,{ foreignKey: 'id'});
    Products.belongsTo(models.Manufacturers,{
      as:"man_info",foreignKey: 'manufacturer_id'
    });
    Products.belongsTo(models.Stores,{
      as:"store_info",foreignKey: 'store_id'
    });
  };
  return Products;
};