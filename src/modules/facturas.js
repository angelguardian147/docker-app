
const database = require('../database/database')

const connection = database.connection;


const getFacturas = function (req, res){
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
  }

module.exports = { getFacturas };