const mongoose = require('mongoose')
const Schema = mongoose.Schema

let LoginSchema = new Schema({
    UserName: {
        type: String,
        required: false,
    },
    Password: {
        type: String,
        required: false,
    }

}, {
    collection: 'Login'
})

mongoose.exports = mongoose.model('Login', LoginSchema)