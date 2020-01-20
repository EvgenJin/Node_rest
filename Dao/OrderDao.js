const db = require('../models');

module.exports = {
    getAllOrders: function () {
      return new Promise((resolve,reject) => {
        db.Order.findAll()
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err.name);
        })
      })
    },
    createOrder: function(date, amount, customer) {
      return new Promise((resolve,reject) => {
        db.Order.create({date, amount, customer})
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err.name)
        })
      })
    }
}