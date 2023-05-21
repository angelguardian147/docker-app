
const database = require('../../database/database');

const connection = database.connection;


class FacturaService{

    getFacturas(id) {
        const query = `select * from facturas 
                            where 
                                id_cliente=${id}`;
        const res = connection.promise().query(query).then( ([rows, fields]) => {
            return rows;
        });
        return res;
      }

}

module.exports = FacturaService;