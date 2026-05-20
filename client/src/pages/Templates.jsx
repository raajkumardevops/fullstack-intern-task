import { useEffect, useState } from "react"
import API from "../services/api"
import TemplateCard from "../components/TemplateCard"

function Templates() {

  const [templates, setTemplates] = useState([])

  const [search, setSearch] = useState("")

  const [category, setCategory] = useState("All")

  // Fetch templates
  const fetchTemplates = async () => {

    try {

      const res = await API.get("/templates")

      setTemplates(res.data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {
    fetchTemplates()
  }, [])

  // Filtered Templates
  const filteredTemplates = templates.filter((template) => {

    const matchesSearch =
      template.title
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesCategory =
      category === "All" ||
      template.category === category

    return matchesSearch && matchesCategory
  })

  // Unique categories
  const categories = [
    "All",
    ...new Set(
      templates.map((template) => template.category)
    ),
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore Templates
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">

        {/* Search */}
        <input
          type="text"
          placeholder="Search templates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full md:w-96 outline-none focus:ring-2 focus:ring-black bg-white"
        />

        {/* Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black bg-white"
        >

          {categories.map((cat, index) => (
            <option
              key={index}
              value={cat}
            >
              {cat}
            </option>
          ))}

        </select>

      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredTemplates.length > 0 ? (

          filteredTemplates.map((template) => (
            <TemplateCard
              key={template._id}
              template={template}
            />
          ))

        ) : (

          <p className="text-center col-span-full text-gray-500 text-xl">
            No templates found 😢
          </p>

        )}

      </div>

    </div>
  )
}

export default Templates