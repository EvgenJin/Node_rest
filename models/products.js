'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    serial_num: DataTypes.STRING,
    inventory_num: DataTypes.STRING,
    ip_addr: DataTypes.STRING,
    mac_addr: DataTypes.STRING,
    store_id: DataTypes.INTEGER,
    model_id: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    Products.belongsTo(models.Transfers,{
      foreignKey: 'id'
    });
    Products.belongsTo(models.Models,{
      as:"model_info",foreignKey: 'model_id'
    });
    Products.belongsTo(models.Manufacturers,{
      as:"man_info",foreignKey: 'manufacturer_id'
    });
    Products.belongsTo(models.Stores,{
      as:"store_info",foreignKey: 'store_id'
    });
    Products.belongsTo(models.ProductTypes,{
      as:"type_info",foreignKey: 'type_id'
    });
  };
  return Products;
};