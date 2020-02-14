'use strict';
module.exports = (sequelize, DataTypes) => {
    const vw_products = sequelize.define('vw_products', {
        type:DataTypes.STRING,
        model_name: DataTypes.STRING,
        man_name: DataTypes.STRING,
        serial_num: DataTypes.STRING,
        inventory_num: DataTypes.STRING,
        ip_addr: DataTypes.STRING,
        store_name: DataTypes.STRING
    }, {});
    vw_products.associate = function(models) {
    };
    return vw_products;
};