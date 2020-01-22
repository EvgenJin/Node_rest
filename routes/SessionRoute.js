module.exports = function(app) {
    app.get('/api/session/get',(req,res) => {
        res.send(req.session)
    })
}