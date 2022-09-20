const router = require('express').Router()
const handReporte = require('../controllers/reportes_controller')


router.get('/reports/all', handReporte.getAll)
router.get('/report/:id', handReporte.getOnly)

//router.get('/getonly/:id', handRol.personwithfulldata)

module.exports = router;