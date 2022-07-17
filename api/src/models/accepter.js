module.exports = (sequelize, DataTypes) => {
    return sequelize.define('accepter', {
        terminate: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
    }
    },
    {
        timestamps: true,
        createdAt: 'acceptAt',
        updatedAt: 'terminateAt'
    })
}

