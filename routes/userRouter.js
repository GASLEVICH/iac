const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/', userController.registration)
router.post('/', userController.login)
router.get('/auth', userController.chek)


module.exports = router