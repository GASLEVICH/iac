const {Post} = require('../models/models')
const apiError = require('../errors/apiError')


class PostController {

    async createPost(req, res) {
        try {
            const {post_name, depId} = req.body
            const post = await Post.create({post_name, depId})
            return res.json(post)
        } catch(e) {
            next(apiError.badRequest(e.message))
        }
    }

    async selectPost(req, res) {
        const post = await Post.findAll()
        return res.json(post);
    }

}

module.exports = new PostController()