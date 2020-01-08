const db = require('../models');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const auth = require('../app_modules/auth');

module.exports = function(app) {
    app.use(bodyParser.json());
    
    // get all users 
    app.get('/api/user',(req,res) => {
      auth_check = auth.check(req.headers.authorization)
      if (auth_check == null) {
        return db.User.findAll()
        .then((user) => {
          res.send(user)
        })
        .catch((err) => {
          return res.send(err.name)
        });
      }
      else {
        res.status(401).send(auth_check)
      }
    })

    // registration
    app.post('/api/user/register',async (req,res) => {
        let {login, password} = req.body
        password = bcrypt.hashSync(password, 10);
        const user = await db.User.findOne({ where: { login:req.body.login } });
          if (user == null) {
            return db.User.create({login,password})
              .then((user)=> res.send(user))
              .catch((err) => {
                console.log('Ошибка регистрации', JSON.stringify(user))
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
            // выслать токен - пароль верный
            res.send(auth.generate(login))
          }
          else {
            // выслать ошибку - пароль не верный
            console.log(bcrypt.compareSync(password, user.password))
            return res.status(400).send("Ошибка в login и/или password")
          }
      })
}