const Sequelize = require('sequelize');

const sequelize = new Sequelize('recipe-list', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authentication().then (
    function() {
        console.log('Connected to recipe-list postgres database');
    },
    function (err){
        console.log(err);
    }
);

module.exports = sequelize;