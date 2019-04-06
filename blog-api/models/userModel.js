var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        index: {unique: true}
    },
    password: String,
})

module.exports = mongoose.model('User', userSchema)