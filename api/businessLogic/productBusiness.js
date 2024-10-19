const productService = require("../serviceLogic/productService")

const getAllProducts = async () => productService.getAllProducts()
const getProductById = async () => productService.getProductById()
const addNewProduct = async (body) => productService.addNewProduct(body)
const updateProduct = async (params, body) => productService.updateProduct(params, body)
const deleteProduct = async (params) => productService.deleteProduct(params)

module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct
  };