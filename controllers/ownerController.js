const {Owner} = require("../models/models");
const apiError = require("../errors/apiError");

class OwnerController {

    async createOwner(req, res) {
        try {
            const {owner_name} = req.body
            const owner = await Owner.create({owner_name})
            return res.json(owner)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectOwner(req, res) {
        const owner = await Owner.findAll()
        return res.json(owner)
    }

}

module.exports = new OwnerController()