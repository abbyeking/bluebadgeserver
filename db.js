const Sequelize = require('sequelize');

const sequelize = new Sequelize('recipe-list', 'postgres', 'Password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to recipe-list postgres database');
    },
    function(err){
        console.log(err)
    }
);

module.exports = sequelize;