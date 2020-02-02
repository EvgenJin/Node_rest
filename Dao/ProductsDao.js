const db = require('../models');

module.exports = {
    getAllProducts: function () {
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
                    console.log(err)
                    reject(err.name);
                })
        })
    },
    createProduct: function(data) {
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
    findProductByID: function(id) {
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
    deleteProduct: function(id) {
        this.findProductByID(id)
            .then(product => product.destroy({force:true}))
    }
};