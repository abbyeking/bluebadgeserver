module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('recipe', {
        rId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Recipe;
}