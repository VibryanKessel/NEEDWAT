const {User} = require('../../db/sequelize')

module.exports = (app) => {
    app.post('/api/users/login', (req, res) => {
        console.log(req.body)
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if(!user) {
                res.status(404).json({message: "User not found"})
            } else {
                if(user.password === req.body.password) {
                    res.json(user)
                } else {
                    res.status(401).json({message: "Wrong password"})
                }
            }
        })
        .catch(err => res.status(500).json(err))
    })
}