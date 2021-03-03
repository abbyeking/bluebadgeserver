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
            // image: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // servings: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // readyInMinutes: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // sourceURL: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
    })
    return Recipe;
}