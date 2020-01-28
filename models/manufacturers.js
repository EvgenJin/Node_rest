'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manufacturers = sequelize.define('Manufacturers', {
    name: DataTypes.STRING
  }, {});
  Manufacturers.associate = function(models) {
    // associations can be defined here
  };
  return Manufacturers;
};