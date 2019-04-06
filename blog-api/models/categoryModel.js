var mongoose = require('mongoose')
var Schema = mongoose.Schema
var categorySchema = new Schema({
    name: String,
    slug: String,
},{
    collation: 'Categoris'
})

module.exports = mongoose.model('Category', categorySchema)