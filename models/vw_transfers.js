'use strict';
module.exports = (sequelize, DataTypes) => {
    const vw_transfers = sequelize.define('vw_transfers', {
        tr_date:DataTypes.DATE,
        user_name:DataTypes.STRING,
        code:DataTypes.STRING,
        product_id:DataTypes.INTEGER,
        inventory_num:DataTypes.STRING,
        ip_addr:DataTypes.STRING,
        mac_addr:DataTypes.STRING,
        man_name:DataTypes.STRING,
        model_name:DataTypes.STRING,
        product_type:DataTypes.STRING,
        serial_num:DataTypes.STRING,
        store_from:DataTypes.STRING,
        store_to:DataTypes.STRING
    }, {});
    vw_transfers.associate = function(models) {
    };
    return vw_transfers;
};