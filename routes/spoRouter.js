const Router = require('express')
const router = new Router()
const spoController = require('../controllers/spoController')

router.post('/',spoController.createSpo)
router.get('/', spoController.selectSpo)

module.exports = router