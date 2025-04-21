// ✅ product.js (Complete Final Version for Seller & Customer Workflow)
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const upload = require('../middleware/multer');
const Product = require('../models/Product');

const BASE_URL = process.env.BASE_URL || 'https://student-helper-b5j4.onrender.com';

// ✅ Upload Product
router.post('/upload', verifyToken, upload.single('image'), async (req, res) => {
  try {
    const { title, description, price, sellerName, whatsappNumber } = req.body;

    if (!req.file) return res.status(400).json({ msg: 'Image is required' });

    const newProduct = new Product({
      title,
      description,
      price: Number(price),
      sellerName,
      whatsappNumber,
      image: `${BASE_URL}/uploads/${req.file.filename}`,
      postedBy: req.user.id,
      sold: false
    });

    await newProduct.save();

    // Optional: Send SMS/email to seller here (Twilio/Nodemailer)

    res.status(201).json(newProduct);
  } catch (err) {
    console.error('❌ Upload Error:', err);
    res.status(500).json({ msg: 'Upload failed' });
  }
});

// ✅ Get Products Uploaded by Seller
router.get('/mysells', verifyToken, async (req, res) => {
  try {
    const products = await Product.find({ postedBy: req.user.id });
    const updated = products.map(p => ({ ...p._doc, image: p.image.startsWith('http') ? p.image : `${BASE_URL}/uploads/${p.image}` }));
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch sells' });
  }
});

// ✅ Get All Unsold Products
router.get('/available', async (req, res) => {
  try {
    const products = await Product.find({ sold: false });
    const updated = products.map(p => ({ ...p._doc, image: p.image.startsWith('http') ? p.image : `${BASE_URL}/uploads/${p.image}` }));
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch available products' });
  }
});

// ✅ Mark Product as Purchased (but keep it in seller's dashboard)
router.patch('/purchase/:id', verifyToken, async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, { sold: true }, { new: true });
    if (!updated) return res.status(404).json({ msg: 'Product not found' });

    // Optional: Notify seller via WhatsApp/Email/SMS

    res.json({ msg: 'Product marked as sold', product: updated });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to mark as sold' });
  }
});

module.exports = router;
