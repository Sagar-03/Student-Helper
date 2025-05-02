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
} = require('../controllers/productController');

// ✅ Upload product (no login required)
router.post('/upload', upload.single('image'), uploadProduct);

// ✅ Get all available (unsold) products
router.get('/available', getAvailableProducts);

// ✅ Mark a product as sold
router.patch('/purchase/:id', purchaseProduct);

// ✅ Get all products uploaded by the current logged-in user (Seller dashboard)
router.get('/mysells', verifyToken, getMySells);

// ✅ Delete a product uploaded by the current user
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
      postedBy: req.user._id
    });

    if (!product) return res.status(404).json({ msg: "Product not found" });

    res.json({ msg: "Product deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ msg: "Failed to delete" });
  }
});

module.exports = router;
