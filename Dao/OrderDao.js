const db = require('../models');

module.exports = {
    getAllOrders: function () {
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
    getOne:function(id) {
      return new Promise((resolve,reject) => {
        db.Order.findOne({where:{id:id}})
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
    createOrder: function(date, amount, customer_id) {
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
}