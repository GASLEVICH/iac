const Router = require('express')
const router = new Router()
const pts_typeController = require('../controllers/pts_typeController')

router.post('/', pts_typeController.createTypePts)
router.get('/', pts_typeController.selectTypePts)


module.exports = router