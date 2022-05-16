const Router = require('express')
const router = new Router()

const UtilController= require('../controllers/utilController')

router.post('/', UtilController.createUtil)
router.get('/', UtilController.selectUtil)
module.exports = router