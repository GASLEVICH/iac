const {Executor} = require('../models/models')
const apiError = require('../errors/apiError')


class ExecutorController {

    async createExecutor(req, res) {
        try {
            const {createdAt, updatedAt, userId} = req.body
            const executor = await Executor.create({createdAt, updatedAt, userId})
            return res.json(executor)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectExecutor(req, res) {
        const executor = await Executor.findAll()
        return res.json(executor);
    }

}

module.exports = new ExecutorController()