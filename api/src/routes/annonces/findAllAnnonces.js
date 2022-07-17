const {Annonce} = require('../../db/sequelize')

module.exports = (app) => {
    app.get('/api/annonce', (req, res) => {
        Annonce.findAll()
            .then(annonces => res.json(annonces))
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    })
}