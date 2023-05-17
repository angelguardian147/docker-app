
const mysql = require('mysql') //llamamos a mysql
var express = require('express') //llamamos a Express
var app = express()         


const pool = mysql.createPool({
    host: 'mysql-db-2',
    port: '33060',
    user: 'root',
    password: 'secret',
    database: 'enterprise'
});

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.status(200).json({ mensaje: '¡Hola Mundo 2!' })   
})

app.get('/cervezas', function(req, res) {
  res.status(200).json({ mensaje: '¡A beber cerveza!' })  
})

async function getConnection(){
  try{
      const connection = await pool.getConnection();
      return connection;
  }catch(error){
      console.log(error);
  }
}

app.get('/api/categorias', async function (req, res) {
  const connection = await getConnection();
  const result = await connection.query('select * from categorias', (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.json(results);
  });
})


// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)