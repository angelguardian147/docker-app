
const database = require('../../database/database');

const connection = database.connection;


class ClientesService{

    getClientes() {
        const query = 'select * from clientes';
        const res = connection.promise().query(query).then( ([rows, fields]) => {
            return rows;
        });
        return res;
      }

}

module.exports = ClientesService;