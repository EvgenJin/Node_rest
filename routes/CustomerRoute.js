const CustomerDao = require('../Dao/CustomerDao');

module.exports = function(app) {
  require("../app_modules/RolesMiddleWare")(app);  
  // get all customers
  app.get('/api/customer/all', (req, res) => {
    CustomerDao.getAll()
    .then(function(cus) {
      return res.json(cus)
    })
    .catch((err) => {
      return res.status(500).send(err.name)
    })
  });

  app.get('/api/customer/:id',(req,res) => {
    CustomerDao.findByID(req.params.id)
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

  app.post('/api/customer',(req,res) => {
    const {fio,phone,email} = req.body;
    CustomerDao.create({fio,phone,email})
    .then(cus => {res.json(cus)})
    .catch(err => res.status(500).send(err.name))
  });

  app.delete('/api/customer/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    let cus = await CustomerDao.deleteCus(id);
    res.json(cus)
    // return db.Contact.findById(id)
    //   .then((contact) => contact.destroy({ force: true }))
    //   .then(() => res.send({ id }))
    //   .catch((err) => {
    //     console.log('***Error deleting contact', JSON.stringify(err))
    //     res.status(400).send(err)
    //   })
  });  
};