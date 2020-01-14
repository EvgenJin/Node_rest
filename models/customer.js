'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    fio: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};