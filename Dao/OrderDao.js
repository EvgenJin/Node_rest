const db = require('../models');

module.exports = {
    getAll: function () {
      return new Promise((resolve,reject) => {
        db.Order.findAll()
        .then((order) => {
          resolve(order);
        })
        .catch((err) => {
          reject(err.name);
        })
      })
    },
    findByID:function(id) {
      return new Promise((resolve,reject) => {
        db.Order.findByPk(id)
        .then((order) => {
          resolve(order)
        })
        .catch((err) => {
          reject(err.name)
        })
      })
    },
    findByCustomer: function (id) {
      return new Promise((resolve,reject) => {
        db.Order.findAll({where: {customer_id:id}})
        .then(res=>resolve(res))
        .catch(err => {
          reject(err.name)
        })
      })
    },
    create: function(date, amount, customer_id) {
      return new Promise((resolve,reject) => {
        db.Order.create({date, amount, customer_id})
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err.name)
        })
      })
    }
};