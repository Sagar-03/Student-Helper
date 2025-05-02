const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  sellerName: String,
  whatsappNumber: String,
  sold: { type: Boolean, default: false },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  purchasedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  purchaseDate: { type: Date }
});

module.exports = mongoose.model('Product', productSchema);
