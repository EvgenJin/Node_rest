const ProducttypesDao = require('../Dao/ProducttypesDao');

module.exports = function(app) {
    // get all
    app.get('/api/producttypes/all', (req, res) => {
        ProducttypesDao.getAll({
            order: [
                ['name', 'ASC']
            ]
        })
            .then(function(data) {
                return res.json(data)
            })
            .catch((err) => {
                return res.status(500).send(err.name)
            })
    });
    // get  by id
    app.get('/api/producttypes/:id',(req,res) => {
        ProducttypesDao.findByID(req.params.id)
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

    // add
    app.post('/api/producttypes', (req, res) => {
        let {name} = req.body;
        ProducttypesDao.create({name})
            .then((data) => {
                return res.json(data)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send(err)
            })
    });

    // delete store
    app.delete('/api/producttypes/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        let data = await ManufacturersDao.delete(id);
        res.json(data);
    });
};