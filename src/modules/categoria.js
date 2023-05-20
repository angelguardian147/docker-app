
const database = require('../database/database');

const connection = database.connection;


const getCategorias = function (req, res, next) {
    const query = 'select * from categorias';
    connection.query(query, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(200).json(results);
    });
  }


module.exports = { getCategorias };
