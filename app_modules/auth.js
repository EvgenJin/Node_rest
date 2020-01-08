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

module.exports.generate = function (login) {
  return(jwt.sign({ login }, signature, { expiresIn: expiration }))
}