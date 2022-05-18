const {Pts} = require("../models/models");
const apiError = require("../errors/apiError");

class PtsController {

    async createPts(req, res) {
        try {
            const {pts_invnumber, pts_sernumber, startdate, lastdate, remark, oaId, ownerId, ptsTypeId, pts_name} = req.body
            const pts = await Pts.create({pts_invnumber, pts_sernumber, startdate, lastdate, remark, oaId, ownerId, ptsTypeId, pts_name})
            return res.json(pts)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectPts(req, res) {
        const pts = await Pts.findAll()
        return res.json(pts)
    }

}

module.exports = new PtsController()