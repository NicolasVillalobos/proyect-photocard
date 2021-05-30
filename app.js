// Importaciones
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

// Inicializaciones
const app  = express();

// Configuraciones
app.set('puerto', process.env.PORT || 4000)

// Middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Variables Globales
app.use((req, res, next) => {
    next();
});

// Rutas
app.use(require('./routes/regiones'));
app.use(require('./routes/inserciones'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar Servidor 
app.listen(app.get('puerto'), function () {
    console.log('Server on port', app.get('puerto'));
});