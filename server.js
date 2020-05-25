const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// read .env file
require('dotenv').config()

const app = express()

// set origin
let corsOption = {origin: 'http://localhost:8081'}
let serverPort = process.env.APP_PORT
app.use(cors(corsOption))

// allow reques content type json and x-www-for-urlencoded
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(serverPort, () => {
    console.log('App is running at port = ' + serverPort)
})
