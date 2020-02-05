const StoresDao = require('../Dao/StoresDao');

module.exports = function(app) {
    // get all stores
    app.get('/api/stores/all', (req, res) => {
        StoresDao.getAll()
            .then(function(data) {
                return res.json(data)
            })
            .catch((err) => {
                return res.status(500).send(err.name)
            })
    });
    // get store by id
    app.get('/api/stores/:id',(req,res) => {
        StoresDao.findByID(req.params.id)
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

    // add store
    app.post('/api/stores', (req, res) => {
        let {name, address, chief_name, telephone, email} = req.body;
        StoresDao.create({name, address, chief_name, telephone, email})
            .then((data) => {
                return res.json(data)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send(err)
            })
    });

    // delete store
    app.delete('/api/stores/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        let cus = await StoresDao.delete(id);
        res.json(cus);
    });
};