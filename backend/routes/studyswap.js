const express = require('express');
const router = express.Router();

// Sample writer data for development
const sampleWriters = [
  {
    id: '1',
    name: "Alex Rahman",
    title: "Research Paper Writing",
    expertise: ["Computer Science", "Data Analysis", "Machine Learning"],
    rate: "$15/page",
    rating: 4.8,
    contact: "+1234567890",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: '2',
    name: "Jessica Chen",
    title: "Essay Writing & Editing",
    expertise: ["Literature", "History", "Psychology"],
    rate: "$12/page",
    rating: 4.9,
    contact: "+1234567891",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];

// Sample assignment requests
const sampleRequests = [
  {
    id: '1',
    title: "10-page Research Paper on Machine Learning",
    subject: "Computer Science",
    deadline: "7 days",
    budget: "$150",
    pages: 10,
    requirements: "Must include at least 15 scholarly sources, APA format",
    contact: "+1987654320"
  },
  {
    id: '2',
    title: "Case Study Analysis for Marketing Course",
    subject: "Business",
    deadline: "4 days",
    budget: "$85",
    pages: 5,
    requirements: "Analyze the provided case study with SWOT analysis and recommendations",
    contact: "+1987654321"
  }
];

// Health check endpoint
router.get('/health-check', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'StudySwap API is running' });
});

// Writer service routes
router.get('/writers', (req, res) => {
  res.status(200).json(sampleWriters);
});

router.post('/writers', (req, res) => {
  const { name, title, expertise, rate, contact } = req.body;
  
  // Simple validation
  if (!name || !title || !expertise || !rate || !contact) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  const expertiseArray = Array.isArray(expertise) ? expertise : expertise.split(',').map(item => item.trim());
  
  const newWriter = {
    id: Date.now().toString(),
    name,
    title,
    expertise: expertiseArray,
    rate,
    contact,
    rating: 5.0,
    image: "https://randomuser.me/api/portraits/lego/1.jpg"
  };
  
  sampleWriters.unshift(newWriter);
  res.status(201).json(newWriter);
});

// Assignment request routes
router.get('/requests', (req, res) => {
  res.status(200).json(sampleRequests);
});

router.post('/requests', (req, res) => {
  const { title, subject, deadline, budget, pages, requirements, contact } = req.body;
  
  // Simple validation
  if (!title || !subject || !deadline || !budget || !pages || !requirements || !contact) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  const newRequest = {
    id: Date.now().toString(),
    title,
    subject,
    deadline,
    budget,
    pages: Number(pages),
    requirements,
    contact
  };
  
  sampleRequests.unshift(newRequest);
  res.status(201).json(newRequest);
});

module.exports = router;
