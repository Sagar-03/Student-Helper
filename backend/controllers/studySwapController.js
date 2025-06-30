const WriterService = require('../models/WriterService');
const AssignmentRequest = require('../models/AssignmentRequest');

// Writer service controller methods
exports.getAllWriterServices = async (req, res) => {
  try {
    const writerServices = await WriterService.find()
      .sort({ createdAt: -1 });
    
    res.status(200).json(writerServices);
  } catch (error) {
    console.error('Error fetching writer services:', error);
    res.status(500).json({ message: 'Server error while fetching writer services' });
  }
};

exports.createWriterService = async (req, res) => {
  try {
    const { name, title, expertise, rate, contact } = req.body;
    
    if (!name || !title || !expertise || !rate || !contact) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Check if user is authenticated
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    
    // Try both userId and _id fields for compatibility
    const userId = req.user.userId || req.user._id;
    
    if (!userId) {
      console.error('No userId found in token:', req.user);
      return res.status(401).json({ message: 'Invalid user token - missing userId' });
    }
    
    // Convert expertise string to array if needed
    const expertiseArray = Array.isArray(expertise) ? expertise : expertise.split(',').map(item => item.trim());
    
    const newWriterService = new WriterService({
      userId: userId,
      name,
      title,
      expertise: expertiseArray,
      rate,
      contact,
      rating: 4.5 + Math.random() * 0.5, // Example random rating for demo
      reviewCount: Math.floor(Math.random() * 20) + 1 // Example random review count for demo
    });
    
    const savedWriterService = await newWriterService.save();
    res.status(201).json(savedWriterService);
  } catch (error) {
    console.error('Error creating writer service:', error);
    res.status(500).json({ message: 'Server error while creating writer service' });
  }
};

exports.getWriterServiceById = async (req, res) => {
  try {
    const writerService = await WriterService.findById(req.params.id);
    
    if (!writerService) {
      return res.status(404).json({ message: 'Writer service not found' });
    }
    
    res.status(200).json(writerService);
  } catch (error) {
    console.error('Error fetching writer service by ID:', error);
    res.status(500).json({ message: 'Server error while fetching writer service' });
  }
};

exports.updateWriterService = async (req, res) => {
  try {
    const { name, title, expertise, rate, contact } = req.body;
    
    // Try both userId and _id fields for compatibility
    const userId = req.user.userId || req.user._id;
    
    // Convert expertise string to array if needed
    const expertiseArray = expertise && (Array.isArray(expertise) ? expertise : expertise.split(',').map(item => item.trim()));
    
    const writerService = await WriterService.findOneAndUpdate(
      { _id: req.params.id, userId: userId },
      { 
        name, 
        title, 
        expertise: expertiseArray,
        rate,
        contact,
        updatedAt: Date.now()
      },
      { new: true }
    );
    
    if (!writerService) {
      return res.status(404).json({ message: 'Writer service not found or you do not have permission to update' });
    }
    
    res.status(200).json(writerService);
  } catch (error) {
    console.error('Error updating writer service:', error);
    res.status(500).json({ message: 'Server error while updating writer service' });
  }
};

exports.deleteWriterService = async (req, res) => {
  try {
    // Try both userId and _id fields for compatibility
    const userId = req.user.userId || req.user._id;
    
    const writerService = await WriterService.findOneAndDelete({
      _id: req.params.id,
      userId: userId
    });
    
    if (!writerService) {
      return res.status(404).json({ message: 'Writer service not found or you do not have permission to delete' });
    }
    
    res.status(200).json({ message: 'Writer service deleted successfully' });
  } catch (error) {
    console.error('Error deleting writer service:', error);
    res.status(500).json({ message: 'Server error while deleting writer service' });
  }
};

// Assignment request controller methods
exports.getAllAssignmentRequests = async (req, res) => {
  try {
    const assignmentRequests = await AssignmentRequest.find({ status: 'open' })
      .sort({ createdAt: -1 });
    
    res.status(200).json(assignmentRequests);
  } catch (error) {
    console.error('Error fetching assignment requests:', error);
    res.status(500).json({ message: 'Server error while fetching assignment requests' });
  }
};

exports.createAssignmentRequest = async (req, res) => {
  try {
    const { title, subject, deadline, budget, pages, requirements, contact } = req.body;
    
    if (!title || !subject || !deadline || !budget || !pages || !requirements || !contact) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Check if user is authenticated
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    
    // Try both userId and _id fields for compatibility
    const userId = req.user.userId || req.user._id;
    
    if (!userId) {
      console.error('No userId found in token:', req.user);
      return res.status(401).json({ message: 'Invalid user token - missing userId' });
    }
    
    const newAssignmentRequest = new AssignmentRequest({
      userId: userId,
      title,
      subject,
      deadline,
      budget,
      pages: Number(pages),
      requirements,
      contact
    });
    
    const savedAssignmentRequest = await newAssignmentRequest.save();
    res.status(201).json(savedAssignmentRequest);
  } catch (error) {
    console.error('Error creating assignment request:', error);
    res.status(500).json({ message: 'Server error while creating assignment request' });
  }
};

exports.getAssignmentRequestById = async (req, res) => {
  try {
    const assignmentRequest = await AssignmentRequest.findById(req.params.id);
    
    if (!assignmentRequest) {
      return res.status(404).json({ message: 'Assignment request not found' });
    }
    
    res.status(200).json(assignmentRequest);
  } catch (error) {
    console.error('Error fetching assignment request by ID:', error);
    res.status(500).json({ message: 'Server error while fetching assignment request' });
  }
};

exports.updateAssignmentRequest = async (req, res) => {
  try {
    const { title, subject, deadline, budget, pages, requirements, contact, status } = req.body;
    
    // Try both userId and _id fields for compatibility
    const userId = req.user.userId || req.user._id;
    
    const assignmentRequest = await AssignmentRequest.findOneAndUpdate(
      { _id: req.params.id, userId: userId },
      { 
        title, 
        subject, 
        deadline,
        budget,
        pages: Number(pages),
        requirements,
        contact,
        status,
        updatedAt: Date.now()
      },
      { new: true }
    );
    
    if (!assignmentRequest) {
      return res.status(404).json({ message: 'Assignment request not found or you do not have permission to update' });
    }
    
    res.status(200).json(assignmentRequest);
  } catch (error) {
    console.error('Error updating assignment request:', error);
    res.status(500).json({ message: 'Server error while updating assignment request' });
  }
};

exports.deleteAssignmentRequest = async (req, res) => {
  try {
    // Try both userId and _id fields for compatibility
    const userId = req.user.userId || req.user._id;
    
    const assignmentRequest = await AssignmentRequest.findOneAndDelete({
      _id: req.params.id,
      userId: userId
    });
    
    if (!assignmentRequest) {
      return res.status(404).json({ message: 'Assignment request not found or you do not have permission to delete' });
    }
    
    res.status(200).json({ message: 'Assignment request deleted successfully' });
  } catch (error) {
    console.error('Error deleting assignment request:', error);
    res.status(500).json({ message: 'Server error while deleting assignment request' });
  }
};
