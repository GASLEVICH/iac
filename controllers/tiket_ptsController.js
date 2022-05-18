const {Tiket_pts} = require("../models/models");
const apiError = require("../errors/apiError");

class Tiket_ptsController {

    async createTiket_pts(req, res) {
        try {
            const {tiket_pts_numb_iac, tiket_pts_numb_support, tiket_pts_problem,
                oaId, tiketTypeId, tiketCharacterId, tiketCategoryId,
                spoId, ptId} = req.body
            const tiket_pts = await Tiket_pts.create({tiket_pts_numb_iac,
                tiket_pts_numb_support, tiket_pts_problem, oaId, tiketTypeId,
                tiketCharacterId, tiketCategoryId, spoId, ptId})
            return res.json(tiket_pts)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectTiket_pts(req, res) {
        const tiket_pts = await Tiket_pts.findAll()
        return res.json(tiket_pts)
    }

}

module.exports = new Tiket_ptsController()