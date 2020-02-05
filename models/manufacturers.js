'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manufacturers = sequelize.define('Manufacturers', {
    name: DataTypes.STRING
  }, {});
  Manufacturers.associate = function(models) {
    Manufacturers.belongsTo(models.Products,{ foreignKey: 'id'});
    Manufacturers.belongsTo(models.Models,{ foreignKey: 'id'});
  };
  return Manufacturers;
};