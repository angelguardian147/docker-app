
const database = require('../database/database');

const connection = database.connection;


const getProductos = function (req, res){
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
  }


module.exports = { getProductos };