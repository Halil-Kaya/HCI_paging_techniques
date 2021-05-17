const router = require('express').Router()

const dataController = require('../controllers/dataController')

router.get('/makale',dataController.getMakales)

module.exports = router;