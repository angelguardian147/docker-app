
const database = require('../../database/database');

const connection = database.connection;


class ProductoService{

    getProductos(id_cat, id_prov) {
        const query = `select * from productos 
                            where 
                                id_categoria=${id_cat} 
                                and 
                                id_proveedor=${id_prov}`;
        const res = connection.promise().query(query).then( ([rows, fields]) => {
            return rows;
        });
        return res;
      }

}

module.exports = ProductoService;