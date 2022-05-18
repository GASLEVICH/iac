const Router = require('express')
const router = new Router()
const contractsController = require('../controllers/contractsController')


router.post('/', contractsController.createContracts)
router.get('/', contractsController.selectContracts)

module.exports = router