const {Util} = require("../models/models");
const apiError = require("../errors/apiError");

class UtilController {

    async createUtil(req, res) {
        try {
            const {util_name} = req.body
            const util = await Util.create({util_name})
            return res.json(util)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectUtil(req, res) {
        const util = await Util.findAll()
        return res.json(util)
    }

}

module.exports = new UtilController()