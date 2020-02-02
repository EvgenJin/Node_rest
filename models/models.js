'use strict';
module.exports = (sequelize, DataTypes) => {
  const Models = sequelize.define('Models', {
    name: DataTypes.STRING,
    manufacturer_id: DataTypes.INTEGER,
    date_end:DataTypes.DATE
  }, {});
  Models.associate = function(models) {
  };
  return Models;
};