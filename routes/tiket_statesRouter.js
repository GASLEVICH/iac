const Router = require('express')
const router = new Router()

const Tiket_stateController = require('../controllers/tiket_stateController')

router.post('/', Tiket_stateController.createTiket_state)
router.get('/', Tiket_stateController.selectTiket_state)
module.exports = router