const {User} = require('../../db/sequelize')
  
module.exports = (app) => {
  app.delete('/api/Users/:id', (req, res) => {
    User.findByPk(req.params.id).then(User => {
      const UserDeleted = User;
      User.destroy({
        where: { id: User.id }
      })
      .then(_ => {
        res.json(UserDeleted)
      })
    })
  })
}