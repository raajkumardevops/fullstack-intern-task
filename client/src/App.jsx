import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Templates from "./pages/Templates"
import Favorites from "./pages/Favorites"

import ProtectedRoute from "./routes/ProtectedRoute"

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Templates />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  )
}

export default App