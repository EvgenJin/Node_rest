const db = require('../models');

module.exports = {
    getAll: function () {
        return new Promise((resolve,reject) => {
            db.Products.findAll({
                include: [
                    {
                        model:db.Manufacturers,
                        as: "man_info"
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
    create: function(data) {
        return new Promise((resolve,reject) => {
            db.Products.create(data)
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
            db.Products.findByPk(id,{include: [
                    {
                        model:db.Manufacturers,
                        as: "man_info"
                    },
                    {
                        model:db.Stores,
                        as: "store_info"
                    }
                ]})
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    update: function(data) {
        return new Promise(((resolve, reject) => {
            this.findByID(data.id)
                .then(product => {
                    product.update(data);
                    resolve(data)
                })
                .catch((err) => {
                    reject(err)
            })
        }));
    },
    deleteProduct: function(id) {
        this.findByID(id)
            .then(product => product.destroy({force:true}))
    }
};