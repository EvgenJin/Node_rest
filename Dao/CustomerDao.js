const db = require('../models');

module.exports = {
    getAllCus: function () {
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
    createCus: function(cus) {
      return new Promise((resolve,reject) => {
        const { fio, email, phone } = cus;
        db.Customer.create({ fio, email, phone })
        .then((cus) => {
          resolve(cus)
        })
        .catch((err) => {
          reject(err.name)
        })
      })
    },
    findCusByID: function(id) {
      return new Promise((resolve,reject) => {
        db.Customer.findById(id)
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
      // return new Promise((resolve,reject) => {
      //   this.findCusByID(id)
      //   .then((cus) => resolve(cus.destroy({force:true})))
      //   .catch(err => {
      //     reject (err)
      //   })
      // })

    }      

};