'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stores = sequelize.define('Stores', {
    name: DataTypes.STRING,
    address: DataTypes.INTEGER,
    chief_name: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Stores.associate = function(models) {
    Stores.belongsTo(models.Transfers,{ foreignKey: 'id'});
    Stores.belongsTo(models.Products,{ foreignKey: 'id'});
  };
  return Stores;
};