const router = require('express').Router()
const handDetalle_VP = require('../controllers/det_vent_prod_controller')


router.post('/detallevp/create', handDetalle_VP.create)
router.get('/detallevps/all', handDetalle_VP.getAll)
router.get('/detallevp/:id', handDetalle_VP.getOnly)
router.put('/detallevpupd/:id', handDetalle_VP.update)
router.delete('/detallevpdlt/:id', handDetalle_VP.deleteRol)



//router.get('/getonly/:id', handDetalle_SP.personwithfulldata)

module.exports = router;