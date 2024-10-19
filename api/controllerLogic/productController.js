const productBusiness = require('../businessLogic/productBusiness');


const getAllProducts = (req, res) => {
  productBusiness.getAllProducts().then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

const getProductById = (req, res) => {
  productBusiness.getProductById().then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

// admin //
const addNewProduct = (req, res) => {
  productBusiness.addNewProduct(req.body).then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

const updateProduct = (req, res) => {
  productBusiness.updateProduct(req.params, req.body).then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

const deleteProduct = (req, res) => {
  productBusiness.deleteProduct(req.params).then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct
};