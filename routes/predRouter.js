const Router = require('express')
const router = new Router()

const PredController = require('../controllers/predController')

router.post('/', PredController.createPred)
router.get('/', PredController.selectPred)
module.exports = router