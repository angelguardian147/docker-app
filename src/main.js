
var express = require('express') //llamamos a Express
var app = express()      
var categoria = require('./modules/categoria')
var clientes = require('./modules/clientes')
var productos = require('./modules/productos')
var facturas = require('./modules/facturas')
var proveedores = require('./modules/proveedores')
var ventas = require('./modules/ventas')

app.get('/', function(req, res) {
  res.status(200).json({ mensaje: '¡Hola Mundo 2!' })   
})

// CATEGORIAS
app.use('/api/categorias', categoria.getCategorias)

// CLIENTES
app.use('/api/clientes', clientes.getClientes)

// PRODUCTOS
app.use('/api/productos/:id_prov/:id_cat', productos.getProductos)

// FACTURAS
app.use('/api/facturas/:id_cliente', facturas.getFacturas)

// PROVEEDORES
app.use('/api/proveedores', proveedores.getProveedores)

// VENTAS
app.use('/api/ventas/:id_fact/:id_prod', ventas.getVentas)



module.exports = { app }
