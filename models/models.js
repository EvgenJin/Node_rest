'use strict';
module.exports = (sequelize, DataTypes) => {
  const Models = sequelize.define('Models', {
    name: DataTypes.STRING,
    manufacturer_id: DataTypes.INTEGER,
    date_end:DataTypes.DATE,
    type_id: DataTypes.INTEGER,
  }, {});
  Models.associate = function(models) {
    Models.belongsTo(models.Manufacturers,{
      as:"man_info",foreignKey: 'manufacturer_id'
    });
    Models.belongsTo(models.ProductTypes,{
      as:"types_info",foreignKey: 'type_id'
    });
  };
  return Models;
};