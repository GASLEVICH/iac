const Router = require('express')
const router = new Router()

const Tiket_categoryController = require('../controllers/tiket_categoryController')

router.post('/', Tiket_categoryController.createTiket_category)
router.get('/', Tiket_categoryController.selectTiket_category)
module.exports = router