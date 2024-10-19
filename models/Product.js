const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    market_price: Number,
    our_price: Number,
    quantity: Number,
    image_url: String,
});

const Product = mongoose.model('Product', productSchema);