const db = require('../models');
const OrderDAO = require('../Dao/OrderDao');

module.exports = function(app) {
  // get all orders
  app.get('/api/order/all', (req, res) => {
      OrderDAO.getAllOrders()
      .then(function(r) {
        return res.json(r)
      })
      .catch((err) => {
        return res.status(500).send(err.name)
      })
  });

  // add order
  app.post('/api/order', (req, res) => {
    let {date, amount, customer} = req.body
    let Date_now = new Date();
    if (!date) {
      date = Date_now.toISOString();
    }
    OrderDAO.createOrder(date, amount, customer)
    .then((r) => {
      return res.json(r)
    })
    .catch((err) => {
      return res.status(500).send(err.name)
    })
  });      
}