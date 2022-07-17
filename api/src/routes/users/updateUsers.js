const {User} = require('../../db/sequelize')
  
module.exports = (app) => {
  app.put('/api/users/:id', (req, res) => {
    const id = req.params.id
    User.update(req.body, {
      where: { id: id }
    })
    .then(() => {
      User.findByPk(id).then(User => {
        res.json(User)
      })
    })
  })
}