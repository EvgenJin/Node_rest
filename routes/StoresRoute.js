const StoresDao = require('../Dao/StoresDao');

module.exports = function(app) {
    // get all stores
    app.get('/api/stores/all', (req, res) => {
        StoresDao.getAllStores()
            .then(function(data) {
                return res.json(data)
            })
            .catch((err) => {
                return res.status(500).send(err.name)
            })
    });
    // get store by id
    app.get('/api/stores/:id',(req,res) => {
        StoresDao.findStoreByID(req.params.id)
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
        console.log(req.body)
        StoresDao.createStore({name, address, chief_name, telephone, email})
            .then((data) => {
                return res.json(data)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send(err)
            })
    });
};