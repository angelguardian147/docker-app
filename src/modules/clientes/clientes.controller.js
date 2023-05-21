
const express = require('express');
const clientesService = require('./clientes.service')


const route = express.Router();
const cliente = new clientesService();

const clienteRoute = (app) => {

    app.use('/cliente', route);

    route.get('/list', async (req, res) => {
        try {
            const result = await cliente.getClientes();
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ error: 'Database error' })
        }
    })

}


module.exports = { clienteRoute }