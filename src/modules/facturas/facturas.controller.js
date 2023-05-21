
const express = require('express');
const facturaService = require('./facturas.service')


const route = express.Router();
const factura = new facturaService();

const facturaRoute = (app) => {

    app.use('/factura', route);

    route.get('/list/:id_cliente', async (req, res) => {
        try {
            const result = await factura.getFacturas(req.params.id_cliente);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ error: 'Database error' })
        }
    })

}


module.exports = { facturaRoute }