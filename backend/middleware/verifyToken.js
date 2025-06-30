const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token in verifyToken middleware:', decoded); // Debug log
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Token verification error:', err); // Debug log
    res.status(400).json({ message: "Invalid token." });
  }
};
