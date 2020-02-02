'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transfers = sequelize.define('Transfers', {
    store_from: DataTypes.INTEGER,
    store_to: DataTypes.INTEGER,
    code: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
    tr_date: DataTypes.DATE,
    user:DataTypes.STRING
  }, {});
  Transfers.associate = function(models) {
    // associations can be defined here
    Transfers.belongsTo(models.Products,{
      as:"product_info",foreignKey: 'product_id'
    });
    Transfers.belongsTo(models.Stores,{
        as: "store_t", foreignKey: 'store_to'
    });
    Transfers.belongsTo(models.Stores,{
      as:"store_f", foreignKey: 'store_from'
    });
  };
  return Transfers;
};