const Router = require('express')
const router = new Router()
const pts_categoryController = require('../controllers/pts_categoryController')

router.post('/', pts_categoryController.createPtsCategory)
router.get('/', pts_categoryController.selectPtsCategory)


module.exports = router