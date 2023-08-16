const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
    console.log(process.env.NAME);
    res.send("Heyy, I'm on AWS!");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})