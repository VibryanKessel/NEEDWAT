const {Annonce} = require('../../db/sequelize')

module.exports = (app) => {
    app.get('/api/annonce/:id', (req, res) => {
        Annonce.findByPk(req.params.id)
            .then(annonce => res.json(annonce))
            .catch(err => res.status(500).json(err))
            })
    }