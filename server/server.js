const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const templateRoutes = require("./routes/templateRoutes")
const favoriteRoutes = require("./routes/favoriteRoutes")

const app = express()

// Connect DB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())

app.use(
  "/images",
  express.static("public/images")
)

// Routes
app.use("/api/auth", authRoutes)

app.use("/api/templates", templateRoutes)

app.use("/api/favorites", favoriteRoutes)

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Backend Server Running 🚀"
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})