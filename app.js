require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db')

let recipe = require('./controllers/recipecontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();
// sequelize.sync({force: true})
//above line will create and resets the database with the force: true
//comment out to update database

app.use(require("./middleware/headers"));
app.use(express.json());

app.use('/user', user);
app.use('/recipe', recipe);

// app.use('/test', (req, res) => {
//     res.send('This is a server message')
// })

app.listen(3000, () => {
    console.log("App is running on 3000")
})
