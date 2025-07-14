# 🎓 Student Helper – Full Stack MERN Application

Student Helper is a full-stack web application that connects students with services like academic writing, product exchanges, and more. It uses a React + Tailwind frontend with a Node.js + Express backend, supporting Google OAuth2 authentication and API proxying.

---

## 🧠 Features

### ✅ Frontend (React + Vite + Tailwind CSS)
- Fast and modern setup using *Vite*
- Utility-first CSS with *TailwindCSS*
- Responsive components
- CSS transitions and hover effects
- Axios for API integration
- Proxy setup for development to avoid CORS issues

### 🛠 Backend (Node.js + Express)
- REST API for multiple services (Writer Services, Product Uploads)
- JWT-based Google OAuth2 authentication using googleapis and jsonwebtoken
- File uploads (e.g., product images)
- Proxy routing and environment-based URI handling
- MongoDB models for Users, Products, and Services

---

## 🗂 Tech Stack

| Layer      | Technology                      |
|------------|----------------------------------|
| Frontend   | React, Tailwind CSS, Vite       |
| Backend    | Node.js, Express                |
| Auth       | Google OAuth2 via googleapis  |
| Styling    | Tailwind CSS + custom CSS       |
| API Calls  | Axios                           |
| DB         | MongoDB with Mongoose models    |
| Uploads    | multer (assumed), fs, path  |
| Others     | http-proxy-middleware, JWT    |

---

## 🛠 Installation & Setup

### 🔧 Prerequisites
- Node.js & npm
- MongoDB
- Google Cloud credentials for OAuth

### 📦 Clone the Repo

```bash
git clone https://github.com/your-username/student-helper.git
cd student-helper