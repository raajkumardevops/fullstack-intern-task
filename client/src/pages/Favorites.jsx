import { useEffect, useState } from "react"
import API from "../services/api"

function Favorites() {

  const [favorites, setFavorites] = useState([])

  const token = localStorage.getItem("token")

  // Fetch favorites
  const fetchFavorites = async () => {

    try {

      const res = await API.get(
        "/favorites",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setFavorites(res.data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  // Remove favorite
  const handleRemove = async (id) => {

    try {

      await API.delete(
        `/favorites/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      // update UI instantly
      setFavorites(
        favorites.filter(
          (favorite) => favorite._id !== id
        )
      )

      alert("Favorite removed ❌")

    } catch (error) {

      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Favorites ❤️
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {favorites.map((item) => (

          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >

            <img
              src={item.template.image}
              alt={item.template.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">

              <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                {item.template.category}
              </span>

              <h2 className="text-xl font-bold mt-4">
                {item.template.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {item.template.description}
              </p>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(item._id)}
                className="mt-5 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Remove ❌
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Favorites