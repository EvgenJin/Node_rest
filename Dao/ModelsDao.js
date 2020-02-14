const db = require('../models');

module.exports = {
    getAll: function () {
        return new Promise((resolve,reject) => {
            db.Models.findAll({
                include: [
                    {
                        model:db.Manufacturers,
                        as: "man_info"
                    },
                    {
                        model:db.ProductTypes,
                        as: "types_info"
                    },
                ]
            })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err.name);
                })
        })
    },
    create: function(data) {
        return new Promise((resolve,reject) => {
            db.Models.create(data)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    reject(err.name)
                })
        })
    },
    findByID: function(id) {
        return new Promise((resolve,reject) => {
            db.Models.findByPk(id,{
                include: [
                    {
                        model:db.Manufacturers,
                        as: "man_info"
                    },
                    {
                        model:db.ProductTypes,
                        as: "types_info"
                    },
                ]
            })
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    delete: function(id) {
        this.findStoreByID(id)
            .then(data => data.destroy({force:true}))
    }
};