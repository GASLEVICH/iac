const {Tiket_type} = require("../models/models");
const apiError = require("../errors/apiError");

class Tiket_typeController {

    async createTiket_type(req, res) {
        try {
            const {tiket_type_name, createdAt, updatedAt} = req.body
            const tiket_type = await Tiket_type.create({tiket_type_name,
                createdAt, updatedAt})
            return res.json(tiket_type)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectTiket_state(req, res) {
        const tiket_type = await Tiket_type.findAll()
        return res.json(tiket_type)
    }

}

module.exports = new Tiket_typeController()