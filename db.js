const Sequelize = require('sequelize');

const sequelize = new Sequelize('recipe-list', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to recipe-list postgress database');
    },
    function(err) {
        console.log(err);
    }
);

module.exports = sequelize;