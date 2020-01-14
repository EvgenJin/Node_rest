const db = require('../models'); 

module.exports = function(app) {
  // get all customers
  app.get('/api/customer/all', (req, res) => {
    return db.Customer.findAll()
      .then((contact) => res.send(contact))
      .catch((err) => {
        return res.send(err)
      });      
  })

  app.post('/api/customer/search',(req,res) => {
    const {fio,phone,email} = req.body
  })
}