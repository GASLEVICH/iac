const Router = require('express')
const router = new Router()
const executorController = require('../controllers/executorController')

router.post('/',executorController.createExecutor)
router.get('/',executorController.selectExecutor)

module.exports = router