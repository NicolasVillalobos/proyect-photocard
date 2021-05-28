const mysql         = require('mysql');
const { promisify } = require('util');
const { database }  = require('./keys');
const pool          = mysql.createPool(database);

// Control de errores BD
pool.getConnection((err, connection) => {
   if (err) {

        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('LA CONEXIÓN HA SIDO CERRADA');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('LA CONEXIÓN FUE RECHAZADA');
        }

    }

    if(connection) connection.release();
    console.log('Base de datos conectada!');
    return;
});

// Parsear querys a promesas
pool.query = promisify(pool.query);

module.exports = pool;