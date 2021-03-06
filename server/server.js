var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')


var server = express()

var kanye = require('./routes/kanye')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/kanye', kanye)

module.exports = server
