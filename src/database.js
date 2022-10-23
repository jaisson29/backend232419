const mongoose = require('mongoose');

//Cadena de conexion
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'moongodb://localhost/db_test';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexion a la base de datos con exito!!!');
})

module.exports = connection;
