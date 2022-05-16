const Router = require('express')
const router = new Router()

const CauseController= require('../controllers/causeController')

router.post('/', CauseController.createCause)
router.get('/', CauseController.selectCause)
module.exports = router