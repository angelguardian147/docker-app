
var express = require('express') //llamamos a Express
var app = express()      
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mysql-db-2',
  port: 33060,
  user: 'root',
  password: 'secret',
  database: 'enterprise',
  insecureAuth : true
});   

connection.connect();

// connection.connect(function(err){
//   if(err) console.log(err.message);
//   console.log('CONEXIÓN EXITOSA')
// })

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.status(200).json({ mensaje: '¡Hola Mundo 2!' })   
})

app.get('/cervezas', function(req, res) {
  res.status(200).json({ mensaje: '¡A beber cerveza!' })  
})

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


// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)