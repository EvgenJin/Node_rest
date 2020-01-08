const jwt = require('jsonwebtoken');
const signature = 'MySuP3R_z3kr3t';
const expiration = '60h';

module.exports.check = function(token) {
  if (!token) {
    return "Не указан token в header"
  }
  else {
    try {
      let decoded = jwt.verify(token, signature);
      if (decoded.login) {
        return null
      }
    } catch(err) {
      return err
    }
  }
}

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

function containsAny(source,target)
{
    var result = source.filter(function(item){ return target.indexOf(item) > -1});   
    return (result.length > 0);  
} 

module.exports.permit = function (...n_role) {
  return (req,res,next) => {
    if (!req.headers.authorization) {
      res.status(401).send("Не указан token в Authorization header")
    }
    try {
      let decoded = jwt.verify(req.headers.authorization, signature);
      if (!decoded.login.role) {
        res.status(401).send("Роль пользователя " + decoded.login.login + " не опредлена")
      }
      if (decoded.login.role.split(',').some(r=> n_role.indexOf(r) >= 0)) {
          return next();
      }
      res.send("В доступе отказано")
    }
    catch (err) {
      res.status(401).send(err.message)
    }
  }
}

module.exports.generate = function (login) {
  return(jwt.sign({ login }, signature, { expiresIn: expiration }))
}