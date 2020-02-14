const db = require('../models');

module.exports = {
    getAll: function() {
        return new Promise((resolve,reject) => {
            db.vw_transfers.findAll()
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err.name)
                })
        })
    },
    // getAll: function () {
    //     return new Promise((resolve,reject) => {
    //         db.Transfers.findAll({
    //             include: [
    //                 {
    //                     model:db.Products,
    //                     as: "product_info",
    //                     required: true
    //                 },
    //                 {
    //                     model:db.Stores,
    //                     as: 'store_f'
    //                 },
    //                 {
    //                     model:db.Stores,
    //                     as: 'store_t'
    //                 }
    //             ]
    //         })
    //             .then((data) => {
    //                 resolve(data);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //                 reject(err.name);
    //             })
    //     })
    // },
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
    findByID: function(id) {
        return new Promise((resolve,reject) => {
            db.Transfers.findByPk(id,{
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
                .then(data => {
                    // data.producto = 19;
                    // console.log(data.dataValues)
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    delete: function(id) {
        this.findTransferByID(id)
            .then(store => store.destroy({force:true}))
    }
};