const {Oa_spo} = require('../models/models')
const apiError = require('../errors/apiError')


class Oa_spoController {

    async createOa_spo(req, res) {
        try {
            const {oaId, spoId} = req.body
            const oa_spo = await Oa_spo.create({oaId, spoId})
            return res.json(oa_spo)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectOa_spo(req, res) {
        const oa_spo = await Oa_spo.findAll()
        return res.json(oa_spo);
    }

}

module.exports = new Oa_spoController()