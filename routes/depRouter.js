const Router = require('express')
const router = new Router()
const depController = require('../controllers/depController')

router.post('/',depController.createDep)
router.get('/', depController.selectDep)

module.exports = router