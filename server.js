const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      app = express();

// const apiRouter = express.Router();
// app.use('/api',apiRouter);
app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
require("./app_modules/RolesMiddleWare")(app);
require("./routes/UserRoute")(app);
require("./routes/OrderRoute")(app);
require("./routes/SessionRoute")(app);
require("./routes/CustomerRoute")(app);


// app.use(express.static(__dirname + '/static'));
// app.listen(3000, () => {
//   console.log('Server is up on port 3000');
// });

module.exports = app