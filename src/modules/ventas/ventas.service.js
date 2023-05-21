
const database = require('../../database/database');

const connection = database.connection;


class VentasService{

    getVentas(id_fact, id_prod) {
        const query = `select * from ventas 
                            where 
                                id_factura=${id_fact}
                                and
                                id_producto=${id_prod}`;  
        const res = connection.promise().query(query).then( ([rows, fields]) => {
            return rows;
        });
        return res;
      }

}

module.exports = VentasService;