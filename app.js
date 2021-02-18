// require('dotenv').config();

let express = require('express')
let app = express ()
let sequelize = require('./db');
// let recipes = require('./controllers/recipecontroller');
let user = require('./controllers/usercontroller');

app.use('/test', (req, res) => {
    res.send('This is a server message')
})

sequelize.sync();
//sequelize.sync({force: true})
//above line will create and resets the database with the force: true
//comment out to update database

app.use(express.json());

app.use('/user', user);

// app.use('./recipes', recipes);


app.listen(3000, () => {
    console.log("App is running on 3000")
})