const ProductsDao = require("../Dao/ProductsDao");
const TransfersDao = require('../Dao/TransfersDao');

module.exports = function(app) {
    // get all
    app.get('/api/transfers/all', (req, res) => {
        TransfersDao.getAll()
            .then(function(data) {
                return res.json(data);
            })
            .catch((err) => {
                return res.status(500).send(err.name)
            })
    });
    // get transfers by id
    app.get('/api/transfers/:id',(req,res) => {
        TransfersDao.findByID(req.params.id)
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
    // delete store
    app.delete('/api/transfers/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        let transfer = await TransfersDao.delete(id);
        res.json(transfer);
    });
};