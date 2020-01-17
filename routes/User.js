const db = require('../models'),
      bcrypt = require('bcrypt'),
      authMW = require('../app_modules/AuthMiddleWare')
;
const UserDAO = require('../Dao/UserDAO');

module.exports = function(app) {

  app.get('/api/user/all', async (req, res) => {    //note async here
      let user = await UserDAO.getAllUser();
      // console.log(user[0].dataValues);
      res.json(user);
  });
  // registration
  app.post('/api/user/register',async (req,res) => {
    let {login, password, name} = req.body
    password = bcrypt.hashSync(password, 10);
    const user = await db.User.findOne({ where: { login:req.body.login } });
      if (user == null) {
        let role = 'user'
        return db.User.create({login,password,name,role})
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
        req.session.user = user.login
        // send token 
        res.send(authMW.generateToken(user))
      }
      else {
        // send error auth
        return res.status(400).send("Ошибка в login и/или password")
      }
  })

  // logout 
  app.get('/api/user/logout',(req,res) => {
    req.session.destroy();
    res.send("logout");
  })  
}