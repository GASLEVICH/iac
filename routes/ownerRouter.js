const Router = require('express')
const router = new Router()

const OwnerController = require('../controllers/ownerController')

router.post('/', OwnerController.createOwner)
router.get('/', OwnerController.selectOwner)
module.exports = router