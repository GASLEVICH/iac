const Router = require('express')
const router = new Router()
const oaController = require('../controllers/oaController')

router.post('/', oaController.createOa)
router.get('/', oaController.selectOa)


module.exports = router