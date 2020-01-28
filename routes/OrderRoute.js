const OrderDAO = require('../Dao/OrderDao');

module.exports = function(app) {
  // get all orders
  app.get('/api/order/all', (req, res) => {
      OrderDAO.getAllOrders()
      .then(function(orders) {
        return res.json(orders)
      })
      .catch((err) => {
        return res.status(500).send(err.name)
      })
  });
  // get order by customer_id
  app.get('/api/order',(req,res) => {
    OrderDAO.findByCustomer(req.query.customer_id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send(err.name))
  });
  // 
  app.get('/api/order/:id',(req,res) => {
    OrderDAO.getOne(req.params.id)
    .then(data => {
      if (data == null) {
        res.send("no data found")
      }
      else {
        res.json(data)
      }
    })
    .catch(err => res.status(500).send(err))
  });
  
  // add order
  app.post('/api/order', (req, res) => {
    let {date, amount, customer_id} = req.body
    let Date_now = new Date();
    if (!date) {
      date = Date_now.toISOString();
    }
    OrderDAO.createOrder(date, amount, customer_id)
    .then((order) => {
      return res.json(order)
    })
    .catch((err) => {
      console.log(err)
      return res.status(500).send(err)
    })
  });      
}