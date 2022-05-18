const Router = require('express')
const router = new Router()
const repairController = require('../controllers/repairController')


router.post('/', repairController.createRepair)
router.get('/', repairController.selectRepair)

module.exports = router