const express = require('express');
const router = express.Router();
const pool    = require('../database');

// Todos las comunas
router.get('/regiones', async(req, res) => {
    const regiones = await pool.query('SELECT * FROM regiones');
    res.json(regiones);
});

/* // Obtener un producto por busqueda
router.get('/product/:name', async(req, res) => {
    const { name } = req.params;
    const producto = await pool.query('SELECT * FROM product WHERE name LIKE ?', '%'+[name]+'%');
    res.json(producto);
});
 */



module.exports = router;