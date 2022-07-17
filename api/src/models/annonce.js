module.exports = (sequelize, DataTypes) => {
    return sequelize.define('annonce', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        credit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        accepter: {
            type: DataTypes.INTEGER,
            defaultValue: 0, 
            allowNull: false
        } 
    },
    {
        timestamps: true,
        createdAt: 'date',
        updatedAt: false
    });
}