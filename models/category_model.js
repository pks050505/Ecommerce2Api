const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    id: {
        type: String,
    },
    name: { type: String },
    color: String,
    icon: String,
    image: String,
})

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
