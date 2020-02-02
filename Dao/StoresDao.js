const db = require('../models');

module.exports = {
    getAllStores: function () {
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
    createStore: function(data) {
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
    findStoreByID: function(id) {
        return new Promise((resolve,reject) => {
            db.Stores.findById(id)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    deleteStore: function(id) {
        this.findStoreByID(id)
            .then(store => store.destroy({force:true}))
    }

};