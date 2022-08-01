const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.listen(8000, () => { console.log("Pizza is flying") })