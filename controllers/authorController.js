const {Author} = require("../models/models");
const apiError = require("../errors/apiError");

class AuthorController {

    async createAuthor(req, res) {
        try {
            const {cause_name} = req.body
            const author = await Author.create({cause_name})
            return res.json(author)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectAuthor(req, res) {
        const author = await Author.findAll()
        return res.json(author)
    }

}

module.exports = new AuthorController()