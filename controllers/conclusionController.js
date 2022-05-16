const {Conclusion} = require("../models/models");
const apiError = require("../errors/apiError");

class ConclusionController {

    async createConclusion(req, res) {
        try {
            const {conclusion_name} = req.body
            const conclusion = await Conclusion.create({conclusion_name})
            return res.json(conclusion)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectConclusion(req, res) {
        const conclusion = await Conclusion.findAll()
        return res.json(conclusion)
    }

}

module.exports = new ConclusionController()