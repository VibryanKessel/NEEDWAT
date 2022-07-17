const {User} = require('../../db/sequelize')

module.exports = (app) => {
    app.get('/api/users/:id', (req, res) => {
        User.findByPk(req.params.id)
            .then(user => res.json(user))
            .catch(err => res.status(500).json(err))
    }
    )
}