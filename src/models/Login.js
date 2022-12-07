const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    UserName: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }

}, {
    collection: 'users'
})

mongoose.exports = mongoose.model('Login', userSchema)