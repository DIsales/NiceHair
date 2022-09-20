const router = require('express').Router()
const handVenta = require('../controllers/venta_controller')


router.post('/venta/create', handVenta.create)
router.get('/ventas/all', handVenta.getAll)
router.get('/venta/:id', handVenta.getOnly)
router.put('/ventaupd/:id', handVenta.update)
router.delete('/ventadlt/:id', handVenta.deleteRol)

router.get('/ventacli/all', handVenta.getCli)
router.get('/ventaesti/all', handVenta.getEsti)

router.put('/ventacobro/:id', handVenta.updateEstado)



//router.get('/getonly/:id', handRol.personwithfulldata)

module.exports = router;