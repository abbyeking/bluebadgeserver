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
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        servings: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        readyInMinutes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sourceUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return Recipe;
}