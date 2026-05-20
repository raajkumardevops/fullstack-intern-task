# Mini SaaS Template Store 🚀

A full-stack web application where users can register, login, browse templates, favorite templates, and manage their favorites.

---

# ✨ Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

## Templates
- View all templates
- Search templates
- Filter by category
- Dynamic template cards

## Favorites
- Add templates to favorites
- View favorited templates
- Remove favorites

## UI
- Responsive Design
- Modern SaaS-style interface
- Tailwind CSS styling

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# 📂 Project Structure

```bash
fullstack-intern-task/
│
├── client/
│   ├── src/
│   ├── public/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── public/images/
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:
```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:
```bash
http://localhost:5000
```

---

# 🔐 Environment Variables

Create `.env` file inside `server/`

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY
```

---

---

# 🚀 API Routes

## Auth Routes

### Register
```bash
POST /api/auth/register
```

### Login
```bash
POST /api/auth/login
```

---

## Templates Routes

### Get Templates
```bash
GET /api/templates
```

---

## Favorites Routes

### Add Favorite
```bash
POST /api/favorites/:templateId
```

### Get Favorites
```bash
GET /api/favorites
```

### Remove Favorite
```bash
DELETE /api/favorites/:id
```

---

# 👨‍💻 Author

## Raaj Kumar

- Frontend & Full Stack Developer
- Passionate MERN Stack Developer

---

# 🌟 Future Improvements

- Dark Mode
- Toast Notifications
- Admin Dashboard
- Image Upload System
- Deployment
- Framer Motion Animations

---

# 📌 Status

✅ Project Completed  
✅ Internship Task Ready  