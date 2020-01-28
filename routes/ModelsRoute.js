const ModelsDao = require('../Dao/ModelsDao');

module.exports = function(app) {
    // get all
    app.get('/api/models/all', (req, res) => {
        ModelsDao.getAll()
            .then(function(data) {
                return res.json(data)
            })
            .catch((err) => {
                return res.status(500).send(err.name)
            })
    });
    // get  by id
    app.get('/api/models/:id',(req,res) => {
        ModelsDao.findByID(req.params.id)
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
    app.post('/api/models', (req, res) => {
        let {name,manufacturer_id} = req.body;
        ModelsDao.create({name,manufacturer_id})
            .then((data) => {
                return res.json(data)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send(err)
            })
    });

    // delete store
    app.delete('/api/models/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        let data = await ModelsDao.delete(id);
        res.json(data);
    });
};