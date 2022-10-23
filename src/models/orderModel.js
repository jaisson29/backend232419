//Crear todo lo relacionado con Schema de las compras, ordenes
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        
    }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = orderSchema;