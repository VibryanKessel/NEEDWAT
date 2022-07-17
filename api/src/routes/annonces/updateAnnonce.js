const {Annonce} = require('../../db/sequelize')

module.exports = (app) => {
    app.put('/api/annonce/:id', (req, res) => {
        const id = req.params.id
        Annonce.update(req.body, {
            where: { id: id }   
        })
        .then(_ => {
            Annonce.findByPk(id).then(Annonce => {
                res.json(Annonce)
            })
        })
    })
}
