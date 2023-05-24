
var express = require('express') //llamamos a Express
var routes = require('./modules/routes')
var cors = require('cors')


var app = express()      

app.use(express.static('public'))
app.use('/static', express.static('public'))

// RUTA PRINCIPAL
app.get('/', function(req, res) {
  res.status(200).sendFile(__dirname, '/index.html');
})

// RUTAS DE LOS MODULOS
app.use('', routes)

app.use(cors());

module.exports = { app }
