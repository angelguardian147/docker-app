
const database = require('../database/database')

const connection = database.connection;


const getVentas = function (req, res){
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
  }


module.exports = { getVentas }