
const express = require('express');
const route = express.Router();
const categoria = require('./categoria/categoria.controller');
const cliente = require('./clientes/clientes.controller');
const factura = require('./facturas/facturas.controller');
const producto = require('./productos/productos.controller');
const proveedor = require('./proveedores/proveedores.controller')
const ventas = require('./ventas/ventas.controller')


categoria.categoriaRoute(route);
cliente.clienteRoute(route);
factura.facturaRoute(route);
producto.productoRoute(route);
proveedor.proveedorRoute(route);
ventas.ventaRoute(route);

module.exports =  route 