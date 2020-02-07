'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductTypes = sequelize.define('ProductTypes', {
    name: DataTypes.STRING
  }, {});
  ProductTypes.associate = function(models) {
    ProductTypes.belongsTo(models.Products,{ foreignKey: 'id'});
    ProductTypes.belongsTo(models.Models,{ foreignKey: 'id'});
  };
  return ProductTypes;
};