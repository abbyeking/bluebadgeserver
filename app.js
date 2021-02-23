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
app.options('*', (req, res) => {
    res.json({
      status: 'OK'
    });
  });
app.use(express.json());

app.use('/user', user);
app.use('/recipe', recipe);

// app.use('/test', (req, res) => {
//     res.send('This is a server message')
// })
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`App is running on ${PORT}`)
// })
app.listen(3000, () => {
    console.log('App is running on port 3000')
})
