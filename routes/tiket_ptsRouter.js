const Router = require('express')
const router = new Router()
const tiket_ptsController = require('../controllers/tiket_ptsController')


router.post('/', tiket_ptsController.createTiket_pts)
router.get('/', tiket_ptsController.selectTiket_pts)

module.exports = router