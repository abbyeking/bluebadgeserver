module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('recipe', {
        rId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Recipe;
}