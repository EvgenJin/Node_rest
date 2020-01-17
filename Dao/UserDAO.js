const db = require('../models');

module.exports = {
    getAllUser: function () {
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
};