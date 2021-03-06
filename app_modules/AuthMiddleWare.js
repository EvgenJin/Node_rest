const jwt = require('jsonwebtoken');
const signature = 'MySuP3R_z3kr3t';
const expiration = '6h';

// check user auth by token
module.exports.isAuthenticated = function(req, res, next) {
  if (!req.headers.authorization) {
    res.status(401).send("Не указан token в Authorization header")
  }
  try {
    let decoded = jwt.verify(req.headers.authorization, signature);
    if (decoded.login) {
        return next();
    }
  } 
  catch (err) {
    res.status(401).send(err.message)
  }
  res.status(401).send("Ошибка аутентификации");
}

// check user role by token
module.exports.permitUserRole = (...n_role) => {
  return (req,res,next) => {
    if (req.headers.authorization) {
      try {
        let decoded = jwt.verify(req.headers.authorization, signature);
        if (!decoded.user.role) {
          res.status(401).send("Роль пользователя " + decoded.user.login + " не опредлена")
        }
        if (decoded.user.role.split(',').some(r=> n_role.indexOf(r) >= 0)) {
            return next();
        }
        res.send("В доступе отказано")
      }
      catch (err) {
        res.status(401).send(err.message)
      }
    }
    else {
      res.status(401).send("Не указан token в Authorization header")
    }
  }
}

// generate user token
module.exports.generateToken = (user) => {
  return(jwt.sign({ user }, signature, { expiresIn: expiration }))
};