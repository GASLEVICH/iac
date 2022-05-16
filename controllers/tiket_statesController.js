const {Tiket_state} = require("../models/models");
const apiError = require("../errors/apiError");

class Tiket_stateController {

    async createTiket_state(req, res) {
        try {
            const {tiket_pts_state_name, createdAt, updatedAt} = req.body
            const tiket_state = await Tiket_state.create({tiket_pts_state_name,
                createdAt, updatedAt})
            return res.json(tiket_state)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectTiket_state(req, res) {
        const tiket_state = await Tiket_state.findAll()
        return res.json(tiket_state)
    }

}

module.exports = new Tiket_stateController()