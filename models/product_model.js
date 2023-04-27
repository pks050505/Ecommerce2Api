const mongoose = require('mongoose')
const Category = require('./category_model')
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
    },
    richDescription: {
        type: String,
    },
    image: {
        type: String,
    },
    images: [
        {
            type: String,
        },
    ],
    brand: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    countInStock: {
        type: Number,
        min: 0,
        max: 255,
    },
    rating: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    dateCreated: { type: Date },
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product;
