
var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'mysql-db',
  port: 3306,
  user: 'root',
  password: 'secret',
  database: 'enterprise',
  insecureAuth : true
});   

connection.connect(); 

module.exports = { connection };