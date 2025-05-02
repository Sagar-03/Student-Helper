const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const verifyToken = require('../middleware/verifyToken');
const Product = require('../models/Product');

const {
  uploadProduct,
  getAvailableProducts,
  purchaseProduct,
  getMySells,
  deleteProduct
} = require('../controllers/productController');

// ✅ Upload product (requires authentication)
router.post('/upload', verifyToken, upload.single('image'), uploadProduct);

// ✅ Get all available (unsold) products
router.get('/available', getAvailableProducts);

// ✅ Mark a product as sold
router.patch('/purchase/:id', purchaseProduct);

// ✅ Get all products uploaded by the current logged-in user (Seller dashboard)
router.get('/mysells', verifyToken, getMySells);

// ✅ Update a product
router.patch('/:id', verifyToken, async (req, res) => {
  try {
    const { title, description, price } = req.body;
    
    // Find and update the product that belongs to current user
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: req.params.id, postedBy: req.user._id },
      { title, description, price },
      { new: true }
    );
    
    if (!updatedProduct) {
      return res.status(404).json({ msg: 'Product not found or not authorized' });
    }
    
    res.json({ msg: 'Product updated successfully', product: updatedProduct });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ msg: 'Failed to update product' });
  }
});

// ✅ Delete a product uploaded by the current user
router.delete('/:id', verifyToken, deleteProduct);

module.exports = router;
