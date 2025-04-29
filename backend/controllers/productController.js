const Product = require('../models/Product');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';

// Upload a new product
exports.uploadProduct = async (req, res) => {
  try {
    const { title, description, price, sellerName, whatsappNumber } = req.body;
    const image = req.file?.filename;

    if (!title || !description || !price || !sellerName || !whatsappNumber || !image) {
      return res.status(400).json({ msg: 'All fields are required!' });
    }

    const newProduct = new Product({
      title,
      description,
      price: Number(price),
      sellerName,
      whatsappNumber,
      image: `${BASE_URL}/uploads/${image}`, // Save full URL
      sold: false // IMPORTANT: sold false on upload
    });

    await newProduct.save();

    res.status(201).json({ msg: 'Product uploaded successfully!', product: newProduct });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

// Get available (unsold) products
exports.getAvailableProducts = async (req, res) => {
  try {
    const products = await Product.find({ sold: false }); // only unsold
    res.json(products);
  } catch (error) {
    console.error('Fetch available products error:', error);
    res.status(500).json({ msg: 'Failed to fetch products' });
  }
};

// Purchase a product (mark as sold)
exports.purchaseProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, { sold: true }, { new: true });
    if (!updated) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json({ msg: 'Product purchased successfully!', product: updated });
  } catch (error) {
    console.error('Purchase error:', error);
    res.status(500).json({ msg: 'Failed to purchase product' });
  }
};
