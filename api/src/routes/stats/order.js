const {User} = require('../../db/sequelize')

module.exports = (app) => {
    app.get('/api/stats/users', (req, res) => {
        User.findAll({
            order: [['credit', 'DESC']]
        })
        .then(users => {
            res.json(users)
        })
        .catch(err => res.status(404).json({ error: err }))
    })
}