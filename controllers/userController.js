const apiError = require('../errors/apiError')

class UserController {

    async registration(req, res) {

    }

    async login(req, res) {

    }

    async chek(req, res, next) {
        const {id} = req.query
        if (!id) {
           return next(apiError.badRequest('Не задан ID'))
        }
        res.json(id);
    }
}

module.exports = new UserController()