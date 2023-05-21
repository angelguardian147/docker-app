
const express = require('express');
const categoriaService = require('./categoria.service')


const route = express.Router();
const categoria = new categoriaService();

const categoriaRoute = (app) => {

    app.use('/categoria', route);

    route.get('/list', async (req, res) => {
        try {
            const result = await categoria.getCategorias();
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ error: 'Database error' })
        }
    })

}


module.exports = { categoriaRoute }