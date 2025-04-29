const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const { uploadProduct, getAvailableProducts, purchaseProduct } = require('../controllers/productController');

// Upload product (no login required)
router.post('/upload', upload.single('image'), uploadProduct);

// Get all available (unsold) products
router.get('/available', getAvailableProducts);

// Purchase a product (mark as sold)
router.patch('/purchase/:id', purchaseProduct);

module.exports = router;
