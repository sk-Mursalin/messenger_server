# messenger Backend 🚀

## 📌 Overview
messenger is a **MERN stack** web application developed for chat with people.

This repository contains the **backend** of messenger, built with **Node.js, Express, socket and MongoDB**, following a **microservices architecture** for scalability.



---


## 🛠️ Tech Stack
- **Backend Framework**: [Node.js](https://nodejs.org/en) + [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- **Authentication**: [JWT (JSON Web Tokens)](https://jwt.io/) + Cookies
- **Encryption**: [bcryptjs](https://www.npmjs.com/package/bcryptjs) for password hashing
- **API Testing**: Postman
- **Package Manager**: npm

---

## 🔑 Features Implemented

### **1. Authentication System**
✅ User Signup, Login, and Logout  
✅ JWT-based authentication with secure cookies  
✅ Password encryption using **bcryptjs**  
✅ Authentication middleware to protect routes  
  

### **2. Database Design**
✅ **User Schema**:
   - Sanitized input fields (`trim`, `lowercase`, validation)
   - Unique constraints on email and username  

✅ **chat Schema**:
   - for collect all the chats of user  



### **3. Middleware Implementation**
✅ **Authentication Middleware**: Protects private routes  
✅ **Error Handling Middleware**: Centralized error response  


### **4. Express Router Structure**
✅ Modular route organization for maintainability  
✅ APIs structured into separate routers (`auth`, `profile`,`users`,`chat`)  

### **5. Realtime chat**
✅  Enables real-time chat communication between connected users via socket.io

---

## 🚀 API Endpoints

### **1. Authentication Routes**
| Method | Endpoint      | Description          | Auth Required |
|--------|--------------|----------------------|--------------|
| POST   | `/signup` | Register a new user | ❌ |
| POST   | `/login` | Authenticate user & issue JWT | ❌ |
| POST   | `/logout` | Logout user by clearing JWT cookie | ✅ |


---
### **2. chat**
| Method | Endpoint           | Description              | Auth Required |
|--------|-------------------|------------------------|--------------|
| GET    | `/chat/:targetuserid`   | Get all post of individual user | ✅ |


---
## 🏗️ Setup & Running the Server

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/sk-Mursalin/messenger_server.git
cd messenger_server
```


### **3️⃣ Start the Backend Server**
```bash
npm run dev
```
Server runs at: `http://localhost:7000/`

---

## 🔗 Frontend Integration
The frontend for messenger is available at:
🔗 **[messenger Frontend Repository](https://github.com/sk-Mursalin/messenger_ui)**

Make sure the backend is running before accessing the frontend.


## 🚀 Deployment

deployed on AWS EC2 instance.
