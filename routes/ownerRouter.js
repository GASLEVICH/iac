const Router = require('express')
const router = new Router()

const OwnerController = require('../controllers/ownerController')

router.post('/', OwnerController.createOwner)
router.get('/', OwnerController.selectOwner)
router.put('/', OwnerController.updateOwner)
router.delete('/', OwnerController.deleteOwner)
module.exports = router