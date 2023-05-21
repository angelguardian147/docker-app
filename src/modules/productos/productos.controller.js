
const express = require('express');
const productoService = require('./productos.service')


const route = express.Router();
const producto = new productoService();

const productoRoute = (app) => {

    app.use('/producto', route);

    route.get('/list/:id_prov/:id_cat', async (req, res) => {
        try {
            const result = await producto.getProductos(req.params.id_cat, req.params.id_prov);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ error: 'Database error' })
        }
    })

}


module.exports = { productoRoute }