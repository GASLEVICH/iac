const Router = require('express')
const router = new Router()

const Tiket_characterController = require('../controllers/tiket_caharacterController')

router.post('/', Tiket_characterController.createTiket_pts_character)
router.get('/', Tiket_characterController.selectTiket_pts_character)
module.exports = router