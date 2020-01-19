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
    },
    findByLogin: function(login) {
      return new Promise((resolve,reject) => {
        db.User.findOne({ where: { login:login } })
        .then(res=>resolve(res))
        .catch((err) => {
          reject(err.name)
        }) 
      })
    },
    createUser: function(login,password,name,role = 'user') {
      return new Promise((resolve,reject) => {
        db.User.create({login,password,name,role})
        .then(res => resolve(res))
        .catch((err) => {
          reject(err.name)
        })
      })
    }

};