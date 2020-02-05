const db = require('../models');

module.exports = {
    getAll: function () {
      return new Promise((resolve,reject) => {
        db.Customer.findAll()
        .then((cus) => {
          resolve(cus);
        })
        .catch((err) => {
          reject(err.name);
        })
      })
    },
    create: function(cus) {
      return new Promise((resolve,reject) => {
        db.Customer.create(cus)
        .then((cus) => {
          resolve(cus)
        })
        .catch((err) => {
          reject(err.name)
        })
      })
    },
    findByID: function(id) {
      return new Promise((resolve,reject) => {
        db.Customer.findByPk(id)
        .then(cus => {
          resolve(cus)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    deleteCus: function(id) {
      this.findCusByID(id)
      .then(cus => cus.destroy({force:true}))
    }
};