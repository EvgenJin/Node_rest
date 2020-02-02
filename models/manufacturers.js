'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manufacturers = sequelize.define('Manufacturers', {
    name: DataTypes.STRING
  }, {});
  Manufacturers.associate = function(models) {
    Manufacturers.belongsTo(models.Products,{ foreignKey: 'id'});
  };
  return Manufacturers;
};