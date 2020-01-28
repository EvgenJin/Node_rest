'use strict';
module.exports = (sequelize, DataTypes) => {
  const Models = sequelize.define('Models', {
    name: DataTypes.STRING,
    manufacturer_id: DataTypes.INTEGER
  }, {});
  Models.associate = function(models) {
    // associations can be defined here
  };
  return Models;
};