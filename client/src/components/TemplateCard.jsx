import { useState } from "react"
import API from "../services/api"

function TemplateCard({ template }) {

  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavorite = async () => {

    try {

      const token = localStorage.getItem("token")

      if (!token) {
        alert("Please login first")
        return
      }

      await API.post(
        `/favorites/${template._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setIsFavorite(true)

      alert("Template favorited ❤️")

    } catch (error) {

      alert(error.response.data.message)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Image */}
      <img
        src={template.image}
        alt={template.title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
          {template.category}
        </span>

        <h2 className="text-xl font-bold mt-4">
          {template.title}
        </h2>

        <p className="text-gray-600 mt-2">
          {template.description}
        </p>

        <button
          onClick={handleFavorite}
          className={`mt-5 w-full py-3 rounded-lg transition duration-300 ${
            isFavorite
              ? "bg-red-500 text-white"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {isFavorite ? "💖 Favorited" : "❤️ Favorite"}
        </button>

      </div>

    </div>
  )
}

export default TemplateCard