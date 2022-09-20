const router = require('express').Router()
const handDetalle_SP = require('../controllers/det_serv_prod_controller')


router.post('/detallesp/create', handDetalle_SP.create)
router.get('/detallesps/all', handDetalle_SP.getAll)
router.get('/detallesp/:id', handDetalle_SP.getOnly)
router.put('/detallespupd/:id', handDetalle_SP.update)
router.delete('/detallespdlt/:id', handDetalle_SP.deleteRol)



//router.get('/getonly/:id', handDetalle_SP.personwithfulldata)

module.exports = router;