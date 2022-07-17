const {User, Adresse, Annonce, Ville, Accepter, Note} = require('./migration');
const users = require('../data/users')
const annonces = require('../data/annonces')
const adresses = require('../data/adresses')
const villes = require('../data/villes')
const {sequelize} = require('./indexSequelize');

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err))


const initDb = async () => {
    sequelize.sync({ force: true })
        .then(() => {
            console.log('Database has been successfully synchronized.')
            villes.map(ville => Ville.create(ville))
            adresses.map(adresse => Adresse.create(adresse))
            users.map(user => User.create(user))  
            annonces.map(annonce => Annonce.create(annonce))
        })
        .catch(err => console.error('An error occurred while creating the database:', err))

}

module.exports = {
    initDb,
    User,
    Annonce,
    Adresse,
    Ville,
    Accepter,
    Note
}