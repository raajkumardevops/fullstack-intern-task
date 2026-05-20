const Favorite = require("../models/Favorite")

// ADD FAVORITE
const addFavorite = async (req, res) => {

  try {

    const { templateId } = req.params

    // check already favorited
    const existingFavorite =
      await Favorite.findOne({
        user: req.user.id,
        template: templateId,
      })

    if (existingFavorite) {
      return res.status(400).json({
        message: "Already favorited"
      })
    }

    const favorite = await Favorite.create({
      user: req.user.id,
      template: templateId,
    })

    res.status(201).json({
      message: "Template favorited",
      favorite,
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

// GET USER FAVORITES
const getFavorites = async (req, res) => {

  try {

    const favorites = await Favorite.find({
      user: req.user.id,
    }).populate("template")

    res.status(200).json(favorites)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

// REMOVE FAVORITE
const removeFavorite = async (req, res) => {

  try {

    const { id } = req.params

    const favorite = await Favorite.findById(id)

    if (!favorite) {
      return res.status(404).json({
        message: "Favorite not found"
      })
    }

    await favorite.deleteOne()

    res.status(200).json({
      message: "Favorite removed"
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  addFavorite,
  getFavorites,
  removeFavorite,
}