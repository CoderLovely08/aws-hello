const express = require('express')
const app = express()
const morgan = require("morgan")
const ejs = require('ejs');
const path = require('path')
require('dotenv').config()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))

app.get('/', (req, res) => {
    res.send("Heyy, I'm on AWS!");
})

app.get('/test', (req, res) => {
res.render('test', {name: 'Lovely'})
})


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})