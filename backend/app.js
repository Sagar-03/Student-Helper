const express = require('express');
const router = express.Router();

// Mock data for StudySwap
const writerServices = [
  {
    id: 1,
    name: "Alex Rahman",
    title: "Research Paper Writing",
    expertise: ["Computer Science", "Data Analysis", "Machine Learning"],
    rate: "$15/page",
    rating: 4.8,
    contact: "+1234567890",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Jessica Chen",
    title: "Essay Writing & Editing",
    expertise: ["Literature", "History", "Psychology"],
    rate: "$12/page",
    rating: 4.9,
    contact: "+1234567891",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    id: 3,
    name: "Michael Torres",
    title: "Technical Report Writing",
    expertise: ["Engineering", "Physics", "Mathematics"],
    rate: "$18/page",
    rating: 4.7,
    contact: "+1234567892",
    image: "https://randomuser.me/api/portraits/men/34.jpg"
  }
];

const assignmentRequests = [
  {
    id: 1,
    title: "10-page Research Paper on Machine Learning",
    subject: "Computer Science",
    deadline: "7 days",
    budget: "$150",
    pages: 10,
    requirements: "Must include at least 15 scholarly sources, APA format",
    contact: "+1987654320"
  },
  {
    id: 2,
    title: "Case Study Analysis for Marketing Course",
    subject: "Business",
    deadline: "4 days",
    budget: "$85",
    pages: 5,
    requirements: "Analyze the provided case study with SWOT analysis and recommendations",
    contact: "+1987654321"
  },
  {
    id: 3,
    title: "Literature Review on Climate Change Effects",
    subject: "Environmental Science",
    deadline: "10 days",
    budget: "$200",
    pages: 12,
    requirements: "Need comprehensive analysis of 20+ peer-reviewed articles from last 5 years",
    contact: "+1987654322"
  }
];

// Routes
router.get('/writers', (req, res) => {
  res.json(writerServices);
});

router.get('/assignments', (req, res) => {
  res.json(assignmentRequests);
});

router.post('/writers', (req, res) => {
  const newWriter = req.body;
  newWriter.id = writerServices.length + 1;
  writerServices.push(newWriter);
  res.status(201).json(newWriter);
});

router.post('/assignments', (req, res) => {
  const newAssignment = req.body;
  newAssignment.id = assignmentRequests.length + 1;
  assignmentRequests.push(newAssignment);
  res.status(201).json(newAssignment);
});

module.exports = router;