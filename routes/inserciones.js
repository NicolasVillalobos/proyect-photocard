const express = require('express');
const router = express.Router();
const pool    = require('../database');
const { validate, format } = require('rut.js') // Libreria para validar y formatear el rut

// Insertar una persona
router.post('/add-persona', async(req, res) => {
    const {rut, nombre, segundonombre, primerapellido, segundoapellido, direccion, telefono, comuna_id} = req.body;
    const rutFormateado = format(rut);
    if(validate(rutFormateado)){
        const newPerson = {
            rut: rutFormateado,
            nombre,
            segundonombre,
            primerapellido,
            segundoapellido,
            direccion,
            telefono,
            comuna_id
        };
        await pool.query('INSERT INTO persona set ?', [newPerson])
    }else{
        res.status(500).json({ mensaje: '¡Ha ocurrido un error al ingresar a una nueva persona!' })
    }

    res.status(200).json({ mensaje: '¡Registro exitoso!' })
});

// Insertar un producto
router.post('/add-product', async(req, res) => {
    const {producto_idproducto, tipoenvio_idtipoEnvio, persona_idpersona, nota, estado_idestado, fechaEnviado, numero_seguimiento} = req.body;

    const newProduct = {
        producto_idproducto,
        tipoenvio_idtipoEnvio,
        persona_idpersona,
        nota,
        estado_idestado,
        fechaEnviado,
        numero_seguimiento
    };
    await pool.query('INSERT INTO personaproducto set ?', [newProduct])

    res.status(200).json({ mensaje: '¡Registro exitoso!' });


});


module.exports = router;