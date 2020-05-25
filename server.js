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

// registry model
const db = require('./app/models')

if (process.env.PRODUCTION == 'true') {
    db.sequelizeConfig.sync()
} else {
    db.sequelizeConfig.sync({force: true}).then(() => {
        console.log('Drop and resync DB')
    })
}

app.listen(serverPort, () => {
    console.log('App is running at port = ' + serverPort)
})
