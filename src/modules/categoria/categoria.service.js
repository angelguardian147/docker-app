
const database = require('../../database/database');

const connection = database.connection;


class CategoriaService{

    getCategorias() {
        const query = 'select * from categorias';
        const res = connection.promise().query(query).then( ([rows, fields]) => {
            return rows;
        });
        return res;
      }

}

module.exports = CategoriaService;