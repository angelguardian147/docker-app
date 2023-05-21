
const express = require('express');
const ventasService = require('./ventas.service')


const route = express.Router();
const ventas = new ventasService();

const ventaRoute = (app) => {

    app.use('/ventas', route);

    route.get('/list/:id_fact/:id_prod', async (req, res) => {
        try {
            const result = await ventas.getVentas(req.params.id_fact, req.params.id_prod);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ error: 'Database error' })
        }
    })

}


module.exports = { ventaRoute }