# 💬 MERN Chat Application

A full-stack real-time chat application built using the **MERN Stack** that enables users to securely communicate with each other through instant messaging. The application features JWT-based authentication, profile management, image sharing, and a clean, responsive user interface.

---

## 📖 Overview

This project demonstrates the implementation of a modern chat platform using React for the frontend and Node.js with Express for the backend. It includes secure authentication, real-time communication, media uploads, and efficient state management.

The project was built to strengthen full-stack development skills and follows industry-standard project organization and API design practices.

---

## ✨ Features

### Authentication

* User Registration
* Secure Login
* JWT Authentication
* Password Encryption using bcrypt
* Protected Routes

### User Management

* Edit Profile
* Upload Profile Picture
* Search Users
* View User Information

### Chat

* One-to-One Real-Time Messaging
* Latest Message Preview
* Message History
* Auto Scroll to Latest Message
* Typing-Friendly Chat Interface

### Media

* Upload Images
* Cloudinary Integration
* Image Preview

### UI

* Responsive Design
* Loading Indicators
* Toast Notifications
* Clean User Experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Context API
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt.js
* Cloudinary
* CORS
* dotenv

### Database

* MongoDB Atlas

---

## 📁 Project Structure

```
project-root/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── apis/
│   │   ├── context/
│   │   ├── styles/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── cloudinary.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Deepakgiri12/chat-app
```

### Navigate to the project

```bash
cd chat-app
```

---

### Install Backend Dependencies

```bash
cd server
npm install
```

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=mongodb_connection_string

JWT_SECRET=jwt_secret

CLOUDINARY_CLOUD_NAME=cloud_name

CLOUDINARY_API_KEY=api_key

CLOUDINARY_API_SECRET=api_secret
```

---

## ▶️ Run the Project

### Backend

```bash
cd server
npm start
```

### Frontend

```bash
cd client
npm start
```

---

## 📸 Screenshots

Add screenshots here after deployment.

```
### Login Page
<img width="1918" height="872" alt="image" src="https://github.com/user-attachments/assets/9d4e4716-a63c-4f00-8648-0210a7339ea3" />


### Signup Page
<img width="1918" height="873" alt="image" src="https://github.com/user-attachments/assets/863a704c-285a-4ffc-88ae-40c90efe82f1" />


### Home Screen
<img width="1918" height="868" alt="image" src="https://github.com/user-attachments/assets/3dcb546a-a6cc-4b62-9d42-f69ac7f7169e" />


Profile Page
<img width="1661" height="526" alt="image" src="https://github.com/user-attachments/assets/6894eaca-602e-427b-a307-84e7c1b00f30" />

```

---

## 🔒 Security

* Passwords are hashed using **bcrypt**
* JWT-based authentication
* Protected backend APIs
* Environment variables stored securely
* Authentication middleware for private routes

---

## 📚 What I Learned

* Building scalable REST APIs
* Authentication using JWT
* Password hashing with bcrypt
* MongoDB schema design
* React component architecture
* API integration using Axios
* Image uploads using Cloudinary
* State management
* Error handling
* Full-stack application deployment

---


## 👨‍💻 Author

**Deepak Giri Goswami**

GitHub: https://github.com/Deepakgiri12

Email: goswamideepak99965@gmail.com

---

