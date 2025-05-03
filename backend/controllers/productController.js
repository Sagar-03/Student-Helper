const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const twilio = require('twilio');

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
      image: `${BASE_URL}/uploads/${image}`,
      sold: false,
      postedBy: req.user._id
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
    const products = await Product.find({ sold: false });
    res.json(products);
  } catch (error) {
    console.error('Fetch available products error:', error);
    res.status(500).json({ msg: 'Failed to fetch products' });
  }
};

// Send WhatsApp notification to seller
const sendWhatsAppNotification = async (whatsappNumber, message) => {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    let twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

    if (!accountSid || !authToken || !twilioWhatsAppNumber) {
      console.log('Twilio credentials missing. Would send message to:', whatsappNumber);
      console.log('Message content:', message);
      return {
        success: false,
        reason: 'missing_credentials',
        directLink: createWhatsAppLink(whatsappNumber, message)
      };
    }

    // Ensure correct Twilio WhatsApp number format
    if (!twilioWhatsAppNumber.startsWith('whatsapp:')) {
      twilioWhatsAppNumber = `whatsapp:${twilioWhatsAppNumber}`;
    }

    const client = twilio(accountSid, authToken);

    // Format the number
    let formattedNumber = whatsappNumber;
    if (!formattedNumber.startsWith('+')) {
      formattedNumber = '+91' + formattedNumber.replace(/[^\d]/g, '');
    }

    console.log(`Sending WhatsApp message to: ${formattedNumber}`);

    const response = await client.messages.create({
      body: message,
      from: twilioWhatsAppNumber,
      to: `whatsapp:${formattedNumber}`
    });

    console.log(`WhatsApp notification sent! SID: ${response.sid}`);
    return {
      success: true,
      sid: response.sid
    };
  } catch (error) {
    console.error('WhatsApp notification error:', {
      message: error.message,
      status: error?.status,
      data: error?.response?.data
    });
    console.log(`Failed to send WhatsApp message to: ${whatsappNumber}`);
    console.log(`Message content: ${message}`);
    return {
      success: false,
      reason: 'twilio_error',
      error: error.message,
      directLink: createWhatsAppLink(whatsappNumber, message)
    };
  }
};

// Helper function to create a direct WhatsApp link
const createWhatsAppLink = (phoneNumber, message = '') => {
  const cleanNumber = phoneNumber.replace(/[^\d]/g, '');

  let formattedNumber;
  if (cleanNumber.startsWith('91')) {
    formattedNumber = cleanNumber;
  } else if (cleanNumber.startsWith('0')) {
    formattedNumber = '91' + cleanNumber.substring(1);
  } else {
    formattedNumber = '91' + cleanNumber;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send/?phone=${formattedNumber}&text=${encodedMessage}`;
};

// Purchase a product (mark as sold and notify seller)
exports.purchaseProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    if (product.sold) {
      return res.status(400).json({ msg: 'This product is already sold' });
    }

    product.sold = true;

    if (req.user && req.user._id) {
      product.purchasedBy = req.user._id;
      product.purchaseDate = new Date();
    }

    await product.save();

    let notificationResult = { success: false };
    if (product.whatsappNumber) {
      console.log("Preparing to notify WhatsApp number:", product.whatsappNumber);
      const message = `🎉 Your product "${product.title}" has just been purchased! Expect a contact soon regarding payment and delivery.`;
      notificationResult = await sendWhatsAppNotification(product.whatsappNumber, message);
      console.log("WhatsApp notification result:", notificationResult.success ? "Sent" : "Failed");
    }

    res.json({
      msg: 'Product purchased successfully!',
      product,
      notification: {
        sent: notificationResult.success,
        directLink: notificationResult.directLink || null
      }
    });
  } catch (error) {
    console.error('Purchase error:', error);
    res.status(500).json({ msg: 'Failed to purchase product' });
  }
};

// Get all purchased products by the current user
exports.getPurchasedProducts = async (req, res) => {
  try {
    const products = await Product.find({
      purchasedBy: req.user._id
    }).populate('postedBy', 'name');

    res.json(products);
  } catch (error) {
    console.error('Fetch purchased products error:', error);
    res.status(500).json({ msg: 'Failed to fetch purchased products' });
  }
};

// Get products uploaded by the current user
exports.getMySells = async (req, res) => {
  try {
    const products = await Product.find({ postedBy: req.user._id });
    res.status(200).json(products);
  } catch (error) {
    console.error('Fetch my sells error:', error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete product and its associated image file (only if not sold)
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      postedBy: req.user._id
    });

    if (!product) {
      return res.status(404).json({ msg: "Product not found or you don't have permission to delete it" });
    }

    if (product.sold) {
      return res.status(403).json({ msg: "You cannot delete this product as it has already been purchased." });
    }

    const imageUrl = product.image;
    let filename = imageUrl ? imageUrl.split('/').pop() : null;

    await Product.findByIdAndDelete(product._id);

    if (filename) {
      const filePath = path.join(__dirname, '../uploads', filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted file: ${filePath}`);
      }
    }

    res.json({ msg: "Product and associated image deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ msg: "Failed to delete product" });
  }
};
