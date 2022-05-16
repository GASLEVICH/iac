const {Spo} = require('../models/models')
const apiError = require('../errors/apiError')


class SpoController {

    async createSpo(req, res) {
        try {
            const {spo_name, old_version, last_version} = req.body
            const spo = await Spo.create({spo_name, old_version, last_version})
            return res.json(spo)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectSpo(req, res) {
        const spo = await Spo.findAll()
        return res.json(spo);
    }

}

module.exports = new SpoController()