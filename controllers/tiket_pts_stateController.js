const {Tiket_pts_state} = require("../models/models");
const apiError = require("../errors/apiError");

class Tiket_pts_stateController {

    async createTiket_pts_state(req, res) {
        try {
            const {state_getdate, createdAt, updatedAt, tiketPtId, tiketStateId} = req.body
            const tiket_pts_state = await Tiket_pts_state.create({state_getdate,
                createdAt, updatedAt, tiketPtId, tiketStateId})
            return res.json(tiket_pts_state)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectTiket_pts_state(req, res) {
        const tiket_pts_state = await Tiket_pts_state.findAll()
        return res.json(tiket_pts_state)
    }

}

module.exports = new Tiket_pts_stateController()