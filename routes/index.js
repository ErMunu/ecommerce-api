const express = require('express');
const router = express.Router();
const productController = require('../controllers/product_controller');

// Home
router.get('/', productController.home);
// API link to list products
router.get('/products', productController.list);

// API link to add products to the database
router.post('/products/create', productController.create);

// API link to update quantity of a product
router.post('/products/:id/update_quantity/', productController.update);

// API link to delete products
router.delete('/products/:id', productController.delete);

module.exports = router;