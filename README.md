# 📚 Student Helper Web App

Welcome to the **Student Helper** — a comprehensive platform designed to make academic life easier for both **day scholars** and **hostellers**. Below is an overview of the core features currently implemented, along with explanations of how each one works.

---

## 🔐 1. Login & Authentication

- Secure login using institutional email and password  
- JWT-based session handling  
- Input validation and error messages  
- Redirects to the student dashboard upon successful login

[./screenshots/login.png]

---

## 🏠 2. Dashboard (Role-based Navigation)

- Personalized welcome message with name and branch  
- Quick access cards for core modules (Marketplace, Resources, etc.)  
- Dynamic content based on user role (Day Scholar or Hosteller)  
- Notification center for announcements and deadlines
[./screenshots/dashboard.png]
---


## 🛍️ 5. Academic Marketplace

- Buy, sell, or exchange textbooks, lab kits, and stationery  
- Filter listings by department, subject, or semester  
- Add new posts with title, condition, price, and images  
- Contact the seller securely through the app
[./screenshots/marketplace.png]
---

## 🌙 6. Night Market

- A fast-moving space for everyday items like snacks, chargers, etc.  
- Listings automatically expire in 24 hours  
- “Need Now” tag for urgent student requests  
- Casual, quick-trade platform between students
[./screenshots/night-market.png]
---

## 📂 7. Subject-wise Resources & File Sharing

- Upload and download lecture notes, PDFs, lab manuals, and assignments  
- Organized by subject code, semester, and type  
- Categorized into Notes, Slides, Past Papers, etc.  
- Upload permissions managed by user roles (student/faculty)
[./screenshots/notes.png]
---

## 🧑‍🏫 8. Google Classroom Integration

- Connects to Google Classroom using secure OAuth login  
- Syncs enrolled classes, announcements, and coursework  
- View deadlines and class materials directly inside the app  
- Quick link to open assignments in Google Classroom
[./screenshots/googleClassroom.png]
---

## 📁 9. Project File Structure

```bash
student-helper/
│
├── client/                     
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── routes/
│       ├── context/
│       └── App.jsx
│
├── server/                     
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
├── screenshots/               
├── .env                        
├── package.json
└── README.md

---

🛠 9. Tech Stack
Frontend: React

Backend: Node.js + Express

Authentication: Google OAuth

Database: MongoDB (with Mongoose)

APIs: Google Classroom API
