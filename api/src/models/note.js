module.exports = (sequelize, DataTypes) => {
    return sequelize.define('note', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        noteFrom: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        noteTo: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        note: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: true, 
        createdAt: 'noteAt',
        updatedAt: false
    })
}