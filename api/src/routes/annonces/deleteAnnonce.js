const {Annonce} = require('../../db/sequelize')

module.exports = (app) => {
    app.delete('/api/annonce/:id', (req, res) => {
        Annonce.findByPk(req.params.id).then(Annonce => {
            const AnnonceDeleted = Annonce;
            Annonce.destroy({
              where: { id: Annonce.id }
            })
            .then(_ => {
              res.json(AnnonceDeleted)
            })
          })
        })
      }