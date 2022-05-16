const {Tiket_result} = require("../models/models");
const apiError = require("../errors/apiError");

class Tiket_resultController {

    async createTiket_result(req, res) {
        try {
            const {damage, identificator_error, result, tiketPrId,
                causeId, conclusionId, utilId, resultRemarkId} = req.body
            const tiket_result = await Tiket_result.create({damage,
                identificator_error, result, tiketPrId, causeId, conclusionId,
                utilId, resultRemarkId})
            return res.json(tiket_result)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectTiket_pts(req, res) {
        const tiket_result = await Tiket_result.findAll()
        return res.json(tiket_result)
    }

}

module.exports = new Tiket_resultController()