const Router = require('express')
const router = new Router()

const AuthorController = require('../controllers/authorController')

router.post('/', AuthorController.createAuthor)
router.get('/', AuthorController.selectAuthor)
module.exports = router