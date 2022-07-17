const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    'testSequelize2',
    'root',
    'TL2k20',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = {
    sequelize,
    DataTypes
}