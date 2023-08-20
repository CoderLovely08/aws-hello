const express = require('express')
const app = express()
const morgan = require("morgan")
const ejs = require('ejs');

require('dotenv').config()
app.set('view engine', 'ejs')

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))
app.get('/', (req, res) => {
    res.send("Heyy, I'm on AWS!");
})

app.get('/test', (req, res) => {
res.render('test', {name: 'Lovely'})
})

app.delete('/pass/:id', (req, res) => {
    console.log(req.params.id);
    res.status(200)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})