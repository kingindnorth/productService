const Product = require('../../models/Product')

// GET all products
const getAllProducts = async () => {
    const products = await Product.find();
    return products
};

// GET product by ID
const getProductById = async () => {
    const product = await Product.findById(req.params.id);
    return product;
};

// POST add new product (admin)
const addNewProduct = async (body) => {
    const newProduct = new Product(body);
    await newProduct.save();
    return newProduct
};

// PUT update product (admin)
const updateProduct = async (params, body) => {
    const updatedProduct = await Product.findByIdAndUpdate(params.id, body, { new: true });
    return updatedProduct;
};

// DELETE product (admin)
const deleteProduct = async (params) => {
    await Product.findByIdAndDelete(params.id);
    return 1;
};

module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct
};
