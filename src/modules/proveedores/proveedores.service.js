
const database = require('../../database/database');

const connection = database.connection;


class ProveedorService{

    getProveedor() {
        const query = 'select * from proveedores';  
        const res = connection.promise().query(query).then( ([rows, fields]) => {
            return rows;
        });
        return res;
      }

}

module.exports = ProveedorService;