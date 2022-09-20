const router = require('express').Router()
const handServicio = require('../controllers/servicio_controller')


router.post('/Servicio/create', handServicio.create)
router.get('/Servicios/all', handServicio.getAll)
router.get('/Servicio/:id', handServicio.getOnly)
router.put('/Servicioupd/:id', handServicio.update)
router.delete('/Serviciodlt/:id', handServicio.deleteRol)



//router.get('/getonly/:id', handServicio.personwithfulldata)

module.exports = router;