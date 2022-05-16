const Router = require('express')
const router = new Router()

const Contractor_typeController = require('../controllers/contractor_typeController')

router.post('/', Contractor_typeController.createContractor)
router.get('/', Contractor_typeController.selectContractor)
module.exports = router