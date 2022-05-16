const Router = require('express')
const router = new Router()

const Tiket_typeController = require('../controllers/tiket_typeController')

router.post('/', Tiket_typeController.createTiket_type)
router.get('/', Tiket_typeController.selectTiket_state)
module.exports = router