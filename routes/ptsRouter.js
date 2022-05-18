const Router = require('express')
const router = new Router()
const ptsController = require('../controllers/ptsController')

router.post('/', ptsController.createPts)
router.get('/', ptsController.selectPts)


module.exports = router