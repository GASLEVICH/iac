const {Contractor} = require("../models/models");
const apiError = require("../errors/apiError");

class ContractorController {

    async createContractor(req, res) {
        try {
            const {contractor_name, contractor_inn, contractor_bik,
                contractorTypeId} = req.body
            const contractor = await Contractor.create({contractor_name,
                contractor_inn, contractor_bik,
                contractorTypeId})
            return res.json(contractor)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectContractor(req, res) {
        const contractor = await Contractor.findAll()
        return res.json(contractor)
    }

}

module.exports = new ContractorController()