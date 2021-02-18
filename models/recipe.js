module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('recipe', {
        rId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        servings: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        readyInMinutes: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    })
    return Recipe;
}