const Router = require('express')
const router = new Router()

const Tiket_pts_stateController = require('../controllers/tiket_pts_stateController')

router.post('/', Tiket_pts_stateController.createTiket_pts_state)
router.get('/', Tiket_pts_stateController.selectTiket_pts_state)
module.exports = router