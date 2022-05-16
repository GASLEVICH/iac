const Router = require('express')
const router = new Router()

const ConclusionController= require('../controllers/conclusionController')

router.post('/', ConclusionController.createConclusion)
router.get('/', ConclusionController.selectConclusion)
module.exports = router