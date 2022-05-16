const Router = require('express')
const router = new Router()
const oa_spoController = require('../controllers/oa_spoController')

router.post('/',oa_spoController.createOa_spo)
router.get('/', oa_spoController.selectOa_spo)

module.exports = router