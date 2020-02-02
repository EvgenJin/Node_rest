const db = require('../models');

module.exports = {
    getAllTransfers: function () {
        return new Promise((resolve,reject) => {
            db.Products.hasOne(db.Transfers, {foreignKey: 'product_id'});
            db.Transfers.findAll({
                include: [
                    {
                        model:db.Products,
                        as: "product_info",
                        required: true
                    },
                    {
                        model:db.Stores,
                        as: 'store_f'
                    },
                    {
                        model:db.Stores,
                        as: 'store_t'
                    }
                ]
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err.name);
                })
        })
    },
    createTransfer: function(data) {
        return new Promise((resolve,reject) => {
            db.Transfers.create(data)
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err.name)
                })
        })
    },
    findTransferByID: function(id) {
        return new Promise((resolve,reject) => {
            db.Transfers.findById(id)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    deleteTransfer: function(id) {
        this.findTransferByID(id)
            .then(store => store.destroy({force:true}))
    }

};