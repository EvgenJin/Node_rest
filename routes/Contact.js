const db = require('../models'); 
const bodyParser = require('body-parser');
const validate = require("../app_modules/Validate");

module.exports = function(app) {
  require("../app_modules/RolesMiddleWare")(app);
  app.use(bodyParser.json());
  
  app.get('/api/contacts/all', (req, res) => {
    return db.Contact.findAll()
      .then((contacts) => res.send(contacts))
      .catch((err) => {
        console.log('There was an error querying contacts', JSON.stringify(err))
        return res.send(err)
      });
  });
  
  app.post('/api/contacts', (req, res) => {
    const { firstName, lastName, phone } = req.body
    // list for validations
    let arr_validate = []
    // list for errors
    let arr_errors = []
    arr_validate.push(validate.validate(firstName,'firstName',['required','latin']))
    arr_validate.push(validate.validate(lastName,'lastName',['required','latin']))
    arr_validate.push(validate.validate(phone,'phone',['required','number']))
    // results in error array
    arr_validate.forEach(element => {
      if (element !== null) {
        arr_errors.push(element)
      }
    });
    // if the array contains errors
    if (arr_errors.length > 0 ) {
      res.status(400).send(arr_errors)
    }
    else {
      return db.Contact.create({ firstName, lastName, phone })
      .then((contact) => res.send(contact))
      .catch((err) => {
        return res.status(400).send(err)
      })
    }    

  });

  app.delete('/api/contacts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return db.Contact.findById(id)
      .then((contact) => contact.destroy({ force: true }))
      .then(() => res.send({ id }))
      .catch((err) => {
        console.log('***Error deleting contact', JSON.stringify(err))
        res.status(400).send(err)
      })
  });  

  app.put('/api/contacts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return db.Contact.findById(id)
    .then((contact) => {
      const { firstName, lastName, phone } = req.body
        return contact.update({ firstName, lastName, phone })
        .then(() => res.send(contact))
        .catch((err) => {
          console.log('***Error updating contact', JSON.stringify(err))
          res.status(400).send(err)
        })
    })
  });

}