const {Pred} = require("../models/models");
const apiError = require("../errors/apiError");

class PredController {

    async createPred(req, res) {
        try {
            const {pred_f_name, pred_s_name, pred_p_name, createdAt, updatedAt, oaId} = req.body
            const pred = await Pred.create({pred_f_name, pred_s_name,
                pred_p_name, createdAt, updatedAt, oaId})
            return res.json(pred)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectPred(req, res) {
        const pred = await Pred.findAll()
        return res.json(pred)
    }

}

module.exports = new PredController()