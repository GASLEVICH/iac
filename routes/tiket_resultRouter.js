const Router = require('express')
const router = new Router()

const Tiket_resultController = require('../controllers/tiket_resultController')

router.post('/', Tiket_resultController.createTiket_result)
router.get('/', Tiket_resultController.selectTiket_pts)
module.exports = router