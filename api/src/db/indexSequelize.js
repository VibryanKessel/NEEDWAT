const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    'testSequelize2',
    process.env.DB_USERNAME || 'root',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = {
    sequelize,
    DataTypes
}