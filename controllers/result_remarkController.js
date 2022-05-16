const {Result_remark} = require("../models/models");
const apiError = require("../errors/apiError");

class Result_remarkController {

    async createResult_remark(req, res) {
        try {
            const {util_name} = req.body
            const result_remark = await Result_remark.create({util_name})
            return res.json(result_remark)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectResult_remark(req, res) {
        const result_remark = await Result_remark.findAll()
        return res.json(result_remark)
    }

}

module.exports = new Result_remarkController()