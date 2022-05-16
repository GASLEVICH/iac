const {Contracts} = require('../models/models')
const apiError = require('../errors/apiError')


class ContractsController {

    async createContracts(req, res) {
        try {
            const {regnum, regdate, lastdate, creare, sumval, remark,
                contractorId} = req.body
            const contracts = await Contracts.create({regnum, regdate, lastdate,
                creare, sumval, remark, contractorId})
            return res.json(contracts)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectContracts(req, res) {
        const contracts = await Contracts.findAll()
        return res.json(contracts);
    }

}

module.exports = new ContractsController()