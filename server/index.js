const express = require('express')
const path = require('path')
const cors = require('cors')


require('dotenv').config()

const port =  process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '74666d63d8d2410b956608bcb788a07d',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

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