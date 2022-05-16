const Router = require('express')
const router = new Router()

const ContractorController = require('../controllers/contractorController')

router.post('/', ContractorController.createContractor)
router.get('/', ContractorController.selectContractor)
module.exports = router