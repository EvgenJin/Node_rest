const db = require('../models');

module.exports = {
    getAll: function () {
        return new Promise((resolve,reject) => {
            db.ProductTypes.findAll({
                order: [
                    ['name', 'ASC']
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
            db.ProductTypes.create(data)
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
            db.ProductTypes.findByPk(id)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    delete: function(id) {
        this.findByID(id)
            .then(data => data.destroy({force:true}))
    }
};