const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema({

    date: {
        type: Date, default: Date.now,
        required: true,
    },
    hora: {
        type: Date, default: Date.now,
        required: true,
    },
    largo: {
        type: Number,
        required: true,
    },
    ancho: {
        type: Number,
        required: true,
    },
    alto: {
        type: Number,
        required: true,
    },
    peso: {
        type: Number,
        required: true,
    },
    pickupAddress: {
        type: String,
        required: true,
    },
    city : {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city2 : {
        type: String,
        required: true,
    },
    
}, {
    collection: 'orders'

})

module.exports = mongoose.model('Order', orderSchema)
