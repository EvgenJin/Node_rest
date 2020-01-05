const db = require('../models');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    // registration
    app.post('/api/user/register',async (req,res) => {
        let {login, password} = req.body
        password = bcrypt.hashSync(password, 10);
        const user = await db.User.findOne({ where: { login:req.body.login } });
          if (user == null) {
            return db.User.create({login,password})
              .then((user)=> res.send(user))
              .catch((err) => {
                console.log('***There was an error creating a contact', JSON.stringify(user))
                return res.status(400).send(err)
              })
          }
          else {
            return res.status(400).send("Пользователь с таким login уже зарегистрирован")
          }
      })
      // login
      app.post('/api/user/login',async (req,res) => {
        let {login, password} = req.body
        const user = await db.User.findOne({ where: { login:req.body.login } });
          if (user == null) {
            return res.status(400).send("Пользователь с таким login не зарегистрирован")
          }
          else if (bcrypt.compareSync(password, user.password)) {     
            res.send("all ok")
          }
          else {
            console.log(bcrypt.compareSync(password, user.password))
            return res.status(400).send("login / пароль не правильные")
          }
      })
}