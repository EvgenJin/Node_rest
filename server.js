const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      app = express();

app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
require("./routes/User")(app);
require("./routes/Contact")(app);
require("./routes/Order")(app);
require("./routes/Session")(app);


// app.use(express.static(__dirname + '/static'));
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});