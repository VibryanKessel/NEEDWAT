const {User} = require('../../db/sequelize')

module.exports = (app) => {
    app.post('/api/users', (req, res) => {
        console.log(req.body)
        User.create(req.body)
            .then(users => res.json(users))
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }
    )
}