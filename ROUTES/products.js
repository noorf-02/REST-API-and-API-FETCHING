const express = require('express');
const Router = express.Router();
const { createProduct, getProduct } = require('../CONTROLLER/products');


Router.post('/register', createProduct);
Router.get('/products', getProduct)

module.exports = Router;

// in routes we create router to register the products and later to get the registered products on the route of products 