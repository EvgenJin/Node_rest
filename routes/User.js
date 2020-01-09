const db = require('../models'),
      bcrypt = require('bcrypt'),
      bodyParser = require('body-parser'),
      authMW = require('../app_modules/AuthMiddleWare')
;

module.exports = function(app) {
  app.use(bodyParser.json());
  require("../app_modules/RolesMiddleWare")(app);

  // get all users
  app.get('/api/user/all',(req,res) => {
    return db.User.findAll()
    .then((user) => {
      res.send(user)
    })
    .catch((err) => {
      return res.send(err.name)
    });
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
    const user = await db.User.findOne({ where: { login:login } });
      if (user == null) {
        return res.status(400).send("Пользователь с таким login не зарегистрирован")
      }
      else if (bcrypt.compareSync(password, user.password)) {
        // send token 
        res.send(authMW.generateToken(user))
      }
      else {
        // send error auth
        return res.status(400).send("Ошибка в login и/или password")
      }
  })
}