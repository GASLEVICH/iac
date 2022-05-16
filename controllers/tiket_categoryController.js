const {Tiket_category} = require("../models/models");
const apiError = require("../errors/apiError");

class Tiket_categoryController {

    async createTiket_category(req, res) {
        try {
            const {tiket_category_name, createdAt, updatedAt} = req.body
            const tiket_category = await Tiket_category.create({tiket_category_name,
                createdAt, updatedAt})
            return res.json(tiket_category)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectTiket_category(req, res) {
        const tiket_category = await Tiket_category.findAll()
        return res.json(tiket_category)
    }

}

module.exports = new Tiket_categoryController()