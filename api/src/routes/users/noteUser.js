const {Note, User} = require('../../db/sequelize')

module.exports = (app) => {
    app.post('/api/users/note/:idUser', (req, res) => {
        User.findByPk(req.params.idUser)
        .then(user => {
            User.findByPk(req.body.idUserToNote)
            .then(userToNote => {
                const note = {
                    noteFrom: user.id,
                    noteTo: userToNote.id, 
                    note: req.body.note
                }
                Note.create(note)
                .then((newNote) => res.json(newNote))
                .catch(err => res.status(500).json({message: "Can't note user"},err))
            })
            .catch(err => res.status(500).json({message: "You can't non-existent user"}, err))
        })
        .catch(err => res.status(500).json(err))
    })
}
                