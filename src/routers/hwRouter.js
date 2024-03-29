const router = require('express').Router()

const hwController = require('../controllers/hwController')

router.get('/raw',hwController.getRawData)

router.get('/paginated', hwController.getPaginatedData)

router.get('/scrolled',hwController.getScrolledDataPage)

module.exports = router;