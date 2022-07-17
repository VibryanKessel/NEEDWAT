module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ville', {
        codePostal: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    }) 
}