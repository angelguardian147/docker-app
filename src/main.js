
var express = require('express') //llamamos a Express
var routes = require('./modules/routes')

var app = express()      

// RUTA PRINCIPAL
app.get('/', function(req, res) {
  res.status(200).json({ mensaje: '¡Hola Mundo 2!' })   
})

// RUTAS DE LOS MODULOS
app.use('', routes)

module.exports = { app }
