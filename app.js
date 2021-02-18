let express = require('express')
let app = express()

app.use('/test', (req, res) => {
    res.send('This is a server message')
})


app.listen(3000, () => {
    console.log("App is running on 3000")
})