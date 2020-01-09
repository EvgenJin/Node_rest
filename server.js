const express = require('express'),
      app = express();

require("./routes/User")(app);
require("./routes/Contact")(app);
require("./routes/Order")(app);

// app.use(express.static(__dirname + '/static'));
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});