const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const serverConfig = require('./configs/server.config')
const dbConfig = require('./configs/db.config')


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

mongoose.connect(dbConfig.DATABASE)
const db = mongoose.connection
db.on('error', () => { console.log("Error while connecting to DB") })
db.once('open', () => { console.log("Connected to DB") })
require('./routes/notification.route')(app)
require("./schedulers/emailScheduler");

app.listen(serverConfig.PORT, () => { console.log("Pizza is flying on port", serverConfig.PORT) })