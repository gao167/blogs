var mongoose = require('mongoose')
var Schema = mongoose.Schema
var blogSchema = new Schema({
    name: String,
    slug: String,
    created: Date,
    updated: Date,
    Content: String,
    Description: String,
    _category_id: Schema.Types.ObjectId,
})

module.exports = mongoose.model('Blog', blogSchema)