// routes/product.js
const router = require('express').Router();
const Product = require('../models/Product');
const verifyToken = require('../middleware/verifyToken');
const upload = require('../middleware/multer');

router.post('/upload', verifyToken, upload.single('image'), async (req, res) => {
  const { title, description, price } = req.body;
  const product = await Product.create({
    title,
    description,
    price,
    image: req.file.filename,
    postedBy: req.user.id
  });
  res.json(product);
});

router.get('/all', async (req, res) => {
  const products = await Product.find().populate('postedBy', 'name');
  res.json(products);
});

module.exports = router;
