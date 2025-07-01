# 📚 Course Selling App

A backend project for a course selling website built using **Node.js**, **Express.js**, and **MongoDB**. This app allows admins to add and manage courses, and users to browse and purchase them.

---

## 🚀 Features

- Admin and user authentication using JWT
- CRUD operations for courses (create, update, delete, list)
- Users can browse and purchase available courses
- RESTful API structure
- MongoDB for database with Mongoose ORM
- Modular and clean folder structure

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Tools:** Postman, dotenv, nodemon

---

## 📡 API Endpoints

### Admin
- `POST /admin/signup`
- `POST /admin/signin`
- `POST /admin/course`
- `PUT /admin/courses`
- `GET /admin/course/bulk`

### Course
- `POST /course/purchase`
- `GET /course/preview`

### User
- `POST /user/signup`
- `POST /user/signin`
- `GET /user/purchases`

---

## 📦 Installation

1. **Clone the repository**
2. **npm install** to Install dependencies
3. **create .env file** 
   - `MONGO_URI=your_mongodb_connection_string`
   - `JWT_SECRET=your_secret_key`
   - `PORT=your_local_port_number`
5. **Start the server** - npm start or npm run dev


## 🙋‍♂️ Author

Harsh Sharma  
[GitHub](https://github.com/kr1sh5harma)

