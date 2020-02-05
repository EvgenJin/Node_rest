const db = require('../models');

module.exports = {
    getAll: function () {
        return new Promise((resolve,reject) => {
            db.Stores.findAll()
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
            // const { name, address, chief_name, telephone, email } = store;
            db.Stores.create(data)
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
            db.Stores.findByPk(id)
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
            .then(store => store.destroy({force:true}))
    }
};