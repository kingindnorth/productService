const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    market_price: Number,
    our_price: Number,
    quantity: Number,
    image_url: String,
});

module.exports = mongoose.model('Product', productSchema);