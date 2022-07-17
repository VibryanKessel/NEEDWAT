const {User} = require('../../db/sequelize')

module.exports = (app) => {
    app.get('/api/users', (req, res) => {
        User.findAll()
            .then(users => res.json(users))
            .catch(err => res.status(500).json(err))
    }
    )
}