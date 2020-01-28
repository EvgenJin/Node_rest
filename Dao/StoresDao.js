const db = require('../models');

module.exports = {
    getAllStores: function () {
        return new Promise((resolve,reject) => {
            db.Stores.findAll()
                .then((stores) => {
                    resolve(stores);
                })
                .catch((err) => {
                    reject(err.name);
                })
        })
    },
    createStore: function(store) {
        return new Promise((resolve,reject) => {
            const { name, address, chief_name, telephone, email } = store;
            db.Stores.create({ name, address, chief_name, telephone, email })
                .then((store) => {
                    resolve(store)
                })
                .catch((err) => {
                    reject(err.name)
                })
        })
    },
    findStoreByID: function(id) {
        return new Promise((resolve,reject) => {
            db.Stores.findById(id)
                .then(store => {
                    resolve(store)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    deleteCus: function(id) {
        this.findStoreByID(id)
            .then(store => store.destroy({force:true}))
    }

};