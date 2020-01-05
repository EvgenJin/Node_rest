const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
// const db = require('./models');
require("./routes/User")(app);
require("./routes/Contact")(app);
require("./routes/Order")(app);
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/static'));
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});