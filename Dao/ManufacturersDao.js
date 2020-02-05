const db = require('../models');

module.exports = {
    getAll: function () {
        return new Promise((resolve,reject) => {
            db.Manufacturers.findAll()
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
            db.Manufacturers.create(data)
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
            db.Manufacturers.findByPk(id)
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