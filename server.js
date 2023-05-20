
var express = require('express') //llamamos a Express
var app = express()      
var database = require('./database');

var connection = database.connection;
var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.status(200).json({ mensaje: '¡Hola Mundo 2!' })   
})

// optenemos la lista de proveedores de la base de datos
app.get('/api/proveedores', function(req, res) {
  const query = 'select * from proveedores';  
  connection.query(query, (error, results) => {
    if(error){
      console.log(error);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json(results);
  });
})

// optenemos la lista de categorias de la base de datos
app.get('/api/categorias', function (req, res, next) {
  const query = 'select * from categorias';
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json(results);
  });
})

// optenemos la lista de clientes de la base de datos
app.get('/api/clientes', function (req, res){
  const query = 'select * from clientes';
  connection.query(query, (error, results) => {
    if(error){
      console.log(error);
      return res.status(500).json({ error: 'Database error' })
    }
    return res.status(200).json(results);
  });
})

// optenemos la lista de productos de la base de datos por cada id de categoria y proveedor
app.get('/api/productos/:id_prov/:id_cat', function (req, res){
  const query = `select * from productos 
                          where 
                              id_categoria=${req.params.id_cat} 
                              and 
                              id_proveedor=${req.params.id_prov}`;
  connection.query(query, (error, results) => {
    if(error){
      console.log(error);
      return res.status(500).json({ error: 'Database error' })
    }
    return res.status(200).json(results);
  });
})

// optenemos la lista de facturas de la base de datos por cada id de cliente
app.get('/api/facturas/:id_cliente', function (req, res){
  const query = `select * from facturas 
                          where 
                              id_cliente=${req.params.id_cliente}`;
  connection.query(query, (error, results) => {
    if(error){
      console.log(error);
      return res.status(500).json({ error: 'Database error' })
    }
    return res.status(200).json(results);
  });
})

// optenemos la lista de ventas de la base de datos por cada id de factura y producto
app.get('/api/ventas/:id_fact/:id_prod', function (req, res){
  const query = `select * from ventas 
                          where 
                              id_factura=${req.params.id_fact}
                              and
                              id_producto=${req.params.id_prod}`;
  connection.query(query, (error, results) => {
    if(error){
      console.log(error);
      return res.status(500).json({ error: 'Database error' })
    }
    return res.status(200).json(results);
  });
})


// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)