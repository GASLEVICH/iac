const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')

router.post('/', postController.createPost)
router.get('/',postController.selectPost)

module.exports = router