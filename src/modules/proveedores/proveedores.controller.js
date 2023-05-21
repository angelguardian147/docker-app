
const express = require('express');
const proveedorService = require('./proveedores.service')


const route = express.Router();
const proveedor = new proveedorService();

const proveedorRoute = (app) => {

    app.use('/proveedor', route);

    route.get('/list', async (req, res) => {
        try {
            const result = await proveedor.getProveedor();
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ error: 'Database error' })
        }
    })

}


module.exports = { proveedorRoute }