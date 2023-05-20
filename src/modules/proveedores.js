
const database = require('../database/database')

const connection = database.connection;


const getProveedores = function(req, res) {
    const query = 'select * from proveedores';  
    connection.query(query, (error, results) => {
      if(error){
        console.log(error);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(200).json(results);
    });
  }


module.exports = { getProveedores }