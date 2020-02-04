const TransfersDao = require ('../Dao/TransfersDao');
const ProductsDao = require('../Dao/ProductsDao');

module.exports = function(app) {
    // get all stores
    app.get('/api/products/all', (req, res) => {
        ProductsDao.getAllProducts()
            .then(function(data) {
                console.log(222);
                return res.json(data)
            })
            .catch((err) => {
                return res.status(500).send(err.name)
            })
    });
    // get store by id
    app.get('/api/products/:id',(req,res) => {
        ProductsDao.findProductByID(req.params.id)
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
    app.post('/api/products', (req, res) => {
        let product = {
            model:req.body.model
           ,manufacturer_id:req.body.manufacturer_id
           ,serial_num:req.body.serial_num
           ,inventory_num:req.body.inventory_num
           ,ip_addr:req.body.ip_addr
           ,store_id:req.body.store_to
           // ,type_id:req.body.store_id
        };
        let trans = {
            store_from:null,
            store_to: req.body.store_to,
            code: 'add',
            tr_date: new Date(),
            user: req.body.user
        };
        ProductsDao.createProduct(product)
            .then((data) => {
                trans.product_id = data.id;
                TransfersDao.createTransfer(trans)
                .then((data) => {
                    console.log(data);
                    return res.json(data)
                })
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send(err)
            })
    });

    app.put('/api/products/:id', (req, res) => {
        // const id = parseInt(req.params.id);
        ProductsDao.updateProduct(req.body)
            .then((data) => {
                console.log(data);
                return res.json(data)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send(err)
            })
        // const id = parseInt(req.params.id)
        // return db.Products.findById(id)
        //     .then((product) => {
        //         const { firstName, lastName, phone } = req.body
        //         return product.update({ firstName, lastName, phone })
        //             .then(() => res.send(product))
        //             .catch((err) => {
        //                 console.log('***Error updating contact', JSON.stringify(err))
        //                 res.status(400).send(err)
        //             })
        //     })
    });


    // delete store
    app.delete('/api/products/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        let cus = await StoresDao.deleteStore(id);
        res.json(cus);
    });
};