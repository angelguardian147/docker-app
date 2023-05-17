
var express = require('express') //llamamos a Express
var app = express()      
var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'ec2-3-133-123-17.us-east-2.compute.amazonaws.com',
  port: 33060,
  user: 'root',
  password: 'secret',
  database: 'enterprise',
  insecureAuth : true
});   

connection.connect();

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


// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)