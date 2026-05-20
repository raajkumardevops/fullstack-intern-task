const Template = require("../models/Template")

// GET ALL TEMPLATES
const getTemplates = async (req, res) => {

  try {

    const templates = await Template.find()

    res.status(200).json(templates)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getTemplates,
}