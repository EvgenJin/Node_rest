const db = require('../models');

module.exports = {
    getAllOrders: function () {
      return new Promise((resolve,reject) => {
        db.User.findAll()
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err.name);
        })
      })
    }
}