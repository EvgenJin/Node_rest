const authMW = require('./AuthMiddleWare');

module.exports = function(app) {
  app.use("/api/user/all", authMW.permitUserRole('moder','admin'));
  // app.use("/api/contacts", authMW.isAuthenticated);
}