const {Oa} = require("../models/models");
const apiError = require("../errors/apiError");

class OaController {

    async createOa(req, res) {
        try {
            const {oa_name, oa_vncode, oa_adress, oa_locality, oa_phone, oa_email, oa_ip} = req.body
            const oa = await Oa.create({oa_name, oa_vncode, oa_adress, oa_locality, oa_phone, oa_email, oa_ip})
            return res.json(oa)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectOa(req, res) {
        const oa = await Oa.findAll()
        return res.json(oa)
    }

}

module.exports = new OaController()