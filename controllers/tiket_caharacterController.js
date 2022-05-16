const {Tiket_character} = require("../models/models");
const apiError = require("../errors/apiError");

class Tiket_characterController {

    async createTiket_pts_character(req, res) {
        try {
            const {tiket_charakter_name, createdAt, updatedAt} = req.body
            const tiket_character = await Tiket_character.create({tiket_charakter_name,
                createdAt, updatedAt})
            return res.json(tiket_character)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectTiket_pts_character(req, res) {
        const tiket_character = await Tiket_character.findAll()
        return res.json(tiket_character)
    }

}

module.exports = new Tiket_characterController()