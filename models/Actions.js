module.exports = (sequelize, DataTypes) => {
    const Actions = sequelize.define("actions", {
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            }
        },
        actionType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Actions;
};