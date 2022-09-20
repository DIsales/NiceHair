const router = require('express').Router()
const handProducto = require('../controllers/producto_controller')


router.post('/producto/create', handProducto.create)
router.get('/productos/all', handProducto.getAll)
router.get('/producto/:id', handProducto.getOnly)
router.put('/productoupd/:id', handProducto.update)
router.delete('/productodlt/:id', handProducto.deleteRol)



//router.get('/getonly/:id', handProducto.personwithfulldata)

module.exports = router;