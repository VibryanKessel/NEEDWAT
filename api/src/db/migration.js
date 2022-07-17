const {sequelize, DataTypes} = require('./indexSequelize');
const AnnonceModel = require('../models/annonce');
const AdresseModel = require('../models/adresse');
const UserModel = require('../models/user');
const AccepterModel = require('../models/accepter');
const VilleModel = require('../models/ville');
const NoteModel = require('../models/note');

const Ville = VilleModel(sequelize, DataTypes);
const Adresse = AdresseModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)
const Annonce = AnnonceModel(sequelize, DataTypes)
const Accepter = AccepterModel(sequelize, DataTypes)
const Note = NoteModel(sequelize, DataTypes)

Ville.hasMany(Adresse, {foreignKey: 'cp', targetKey: 'codePostal'});
Adresse.belongsTo(Ville, {foreignKey: 'cp', targetKey: 'codePostal'});
Adresse.hasMany(User, {foreignKey: 'adresseID', targetKey: 'id'});
User.belongsTo(Adresse, {foreignKey: 'adresseID', targetKey: 'id'});
Adresse.hasMany(Annonce, {foreignKey: 'adresseID', targetKey: 'id'});
Annonce.belongsTo(Adresse, {foreignKey: 'adresseID', targetKey: 'id'});
User.belongsToMany(Annonce, {through: Accepter});
Annonce.belongsToMany(User, {through: Accepter}); 
User.belongsToMany(User, {as: 'from', through: Note, foreignKey: 'noteFrom', targetKey: 'id'});
User.belongsToMany(User, {as: 'to', through: Note, foreignKey: 'noteTo', targetKey: 'id'});

module.exports = {
    Adresse,
    User,  
    Annonce,
    Ville,
    Accepter,
    Note
}