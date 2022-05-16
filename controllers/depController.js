const {Dep} = require('../models/models')
const apiError = require('../errors/apiError')


class DepController {

    async createDep(req, res) {
        try {
            const {dep_type} = req.body
            const dep = await Dep.create({dep_type})
            return res.json(dep)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectDep(req, res) {
        const dep = await Dep.findAll()
        return res.json(dep);
    }

}

module.exports = new DepController()