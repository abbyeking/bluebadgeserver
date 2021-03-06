require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db')

let recipe = require('./controllers/recipecontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();
// sequelize.sync({force: true})
app.use(require("./middleware/headers"));

app.options('*', (req, res) => {
    res.json({
      status: 'OK'
    });
  });
app.use(express.json());

app.use('/user', user);
app.use('/recipe', recipe);

app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`)
})
