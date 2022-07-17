const {User, Annonce, Accepter} = require('../../db/sequelize')

module.exports = (app) => {
    app.post('/api/annonces/accept/', (req, res) => {
        Annonce.findOne({ where: { id: req.body.idAnnonce }})
        .then(annonce =>{
            User.findOne({ where: { id: req.body.id }})
            .then(user => {
                const accept = {
                    userId: user.id,
                    annonceId: annonce.id
                }
                Accepter.create(accept)
                .then(newUser =>  res.json(newUser))
                .catch(err => res.status(404).json({ error: err })) 
            })
        })
    })
}