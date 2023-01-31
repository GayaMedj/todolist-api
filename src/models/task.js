module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Task', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        content: {
            type: DataTypes.STRING,
            allowNull: false
        },

        finished: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
        
    }, {
        timestamps: true, 
        createdAt: 'created',
        updatedAt: false
    })
}