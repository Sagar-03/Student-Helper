const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const Product = require('../models/Product');

const {
  uploadProduct,
  getAvailableProducts,
  purchaseProduct,
  getPurchasedProducts,
  getMySells,
  deleteProduct
} = require('../controllers/productController');

// ✅ Upload product (no authentication required)
router.post('/upload', upload.single('image'), uploadProduct);

// ✅ Get all available (unsold) products
router.get('/available', getAvailableProducts);

// ✅ Mark a product as sold (still no authentication)
router.patch('/purchase/:id', purchaseProduct);

// ❌ Removed authentication for viewing purchased products
router.get('/purchased', getPurchasedProducts);

// ❌ Removed authentication for seller dashboard
router.get('/mysells', getMySells);

// ❌ Removed authentication for product update
router.patch('/:id', async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { title, description, price },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    res.json({ msg: 'Product updated successfully', product: updatedProduct });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ msg: 'Failed to update product' });
  }
});

// ❌ Removed authentication for delete product
router.delete('/:id', deleteProduct);

module.exports = router;
