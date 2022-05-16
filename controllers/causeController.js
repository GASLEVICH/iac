const {Cause} = require("../models/models");
const apiError = require("../errors/apiError");

class CauseController {

    async createCause(req, res) {
        try {
            const {cause_name} = req.body
            const cause = await Cause.create({cause_name})
            return res.json(cause)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectCause(req, res) {
        const cause = await Cause.findAll()
        return res.json(cause)
    }

}

module.exports = new CauseController()