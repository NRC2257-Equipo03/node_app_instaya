const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema({

    date: {
        type: Date, default: Date.now,
        required: true,
    },
    hour: {
        type: Date, default: Date.now,
        required: true,
    },
    large: {
        type: Number,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    tall: {
        type: Number,
        required: true,
    },
    weigth: {
        type: Number,
        required: true,
    },
    packageType: {
        type: String,
        required: true,
    },
    pickupAddress: {
        type: String,
        required: true,
    },
    pickupName: {
        type: String,
        required: true,
    },
    pickupId: {
        type: String,
        required: true,
    },
    pickupCity : {
        type: String,
        required: true,
    },
    recipientName: {
        type: String,
        required: true,
    },
    recipientId: {
        type: Number,
        required: true,
    },
    recipientAddress: {
        type: String,
        required: true,
    },
    recipientCity : {
        type: String,
        required: true,
    },
    
}, {
    collection: 'orders'

})

module.exports = mongoose.model('Order', orderSchema)
