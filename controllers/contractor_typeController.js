const {Contractor_type} = require("../models/models");
const apiError = require("../errors/apiError");

class Contractor_typeController {

    async createContractor(req, res) {
        try {
            const {contractor_name, contractor_inn, contractor_bik,
                contractorTypeId} = req.body
            const contractor_type = await Contractor_type.create({contractor})
            return res.json(contractor_type)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectContractor(req, res) {
        const contractor_type = await Contractor_type.findAll()
        return res.json(contractor_type)
    }

}

module.exports = new Contractor_typeController()