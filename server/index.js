const express = require('express')

const path = require('path')

require('dotenv').config()

const port =  process.env.PORT || 5000

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/styles.css'))
})
app.get('pexels-wallace-chuck-3587477.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pexels-wallace-chuck-3587477.jpg'))
})


app.listen(port, () => {
    console.log('Docked at port ' + port)
})