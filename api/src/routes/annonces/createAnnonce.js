const {Annonce} = require('../../db/sequelize')

module.exports = (app) => {
    app.post('/api/annonce', (req, res) => {
        console.log(req.body)
        Annonce.create(req.body)
            .then(annonces => res.json(annonces))
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }
    )
}