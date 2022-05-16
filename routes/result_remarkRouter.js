const Router = require('express')
const router = new Router()

const Result_remarkController= require('../controllers/result_remarkController')

router.post('/', Result_remarkController.createResult_remark)
router.get('/', Result_remarkController.selectResult_remark)
module.exports = router