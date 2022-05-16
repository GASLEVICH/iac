const {Repair} = require('../models/models')
const apiError = require('../errors/apiError')


class RepairController {

    async createRepair(req, res) {
        try {
            const {spo_name, old_version, last_version} = req.body
            const repair = await Repair.create({spo_name, old_version, last_version})
            return res.json(repair)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectRepair(req, res) {
        const repair = await Repair.findAll()
        return res.json(repair);
    }

}

module.exports = new RepairController()