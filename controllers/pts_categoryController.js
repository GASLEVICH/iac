const {Pts_category} = require('../models/models')
const apiError = require('../errors/apiError')

class Pts_categoryController {

    async createPtsCategory(req, res) {
        const {pts_category_name} = req.body
        const pts_category = await Pts_category.create({pts_category_name})
        return res.json(pts_category)
    }

    async selectPtsCategory(req, res) {
        const pts_category = await Pts_category.findAll()
        return res.json(pts_category)
    }

}

module.exports = new Pts_categoryController();