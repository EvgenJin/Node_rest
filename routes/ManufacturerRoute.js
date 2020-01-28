const ManufacturersDao = require('../Dao/ManufacturersDao');

module.exports = function(app) {
    // get all
    app.get('/api/manufacturers/all', (req, res) => {
        ManufacturersDao.getAll()
            .then(function(data) {
                return res.json(data)
            })
            .catch((err) => {
                return res.status(500).send(err.name)
            })
    });
    // get  by id
    app.get('/api/manufacturers/:id',(req,res) => {
        ManufacturersDao.findByID(req.params.id)
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
    app.post('/api/manufacturers', (req, res) => {
        let {name} = req.body;
        ManufacturersDao.create({name})
            .then((data) => {
                return res.json(data)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send(err)
            })
    });

    // delete store
    app.delete('/api/manufacturers/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        let data = await ManufacturersDao.delete(id);
        res.json(data);
    });
};