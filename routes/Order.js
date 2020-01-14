const db = require('../models');

module.exports = function(app) {
  // get all orders
  app.get('/api/orders/all', (req, res) => {
      return db.Order.findAll()
      .then((orders) => {
        res.send(orders)
      })
      .catch((err) => {
        return res.send(err.name)
      });
  });

  // add order
  app.post('/api/orders', (req, res) => {
    let Date_now = new Date();
    let sql_date = Date_now.toISOString();
    let {date, amount, customer} = req.body
    date = sql_date
    return db.Order.create({ date, amount, customer })
      .then((order) => res.send(order))
      .catch((err) => {
        return res.status(400).send(err)
    })
  });      
}