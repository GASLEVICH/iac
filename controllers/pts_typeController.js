const {Pts_type} = require('../models/models');
const apiError = require('../errors/apiError');

class Pts_typeController {

    async createTypePts (req, res) {
        try {
            const {pts_type_name, ptsCategoryId} = req.body
            const pts_type = await Pts_type.create({pts_type_name, ptsCategoryId})
            return res.json(pts_type)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectTypePts (req, res) {
        const pts_type = await Pts_type.findAll()
        return res.json(pts_type)
    }

}

module.exports = new Pts_typeController()