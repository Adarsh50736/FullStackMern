# FullStackMern
# Fullstack Web App – Project & Client Management System

This is a fullstack web application developed as part of the **Flipr Placement Full Stack Task**. It features a public landing page for users and an admin panel for content management.

---

## 🚀 Tech Stack

- **Frontend:** React (Vite), Axios, React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **File Uploads:** Multer
- **Deployment:** Render (Backend) & Netlify/Vercel (Frontend)

---

## 🌐 Live Demo

- 🔗 Frontend: [https://your-frontend-url](https://your-frontend-url)
- 🔗 Backend API: [https://your-backend-api](https://your-backend-api)

---

## 📸 Features Overview

### 🔹 Landing Page
- **Our Projects:** Fetched dynamically from the backend.
- **Happy Clients:** Client testimonials from backend.
- **Contact Form:** Submits user details to the backend.
- **Newsletter Subscription:** Stores emails into the backend.

### 🔹 Admin Panel
- Add new projects with image upload.
- Add new clients with image upload.
- View submitted contact form entries.
- View newsletter subscribers.

---

## 📁 Folder Structure

FullStackMern/
├── backend/ # Express + MongoDB API
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── uploads/
│ └── server.js
├── frontend/ # React Vite App
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── App.jsx
│ │ └── main.jsx
├── .env
└── README.md

yaml
Copy
Edit

---

## 📦 Installation

### Clone the repo
```bash
git clone https://github.com/your-username/your-repo.git
cd FullStackMern