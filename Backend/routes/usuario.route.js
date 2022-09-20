const router = require('express').Router()
const handUsuario = require('../controllers/usuario_controller')


router.post('/usuario/create', handUsuario.create)
router.get('/usuarios/all', handUsuario.getAll)
router.get('/usuario/:id', handUsuario.getOnly)
router.put('/usuarioupd/:id', handUsuario.update)
router.delete('/usuariodlt/:id', handUsuario.deleteRol)

router.get('/usuario/login', handUsuario.login)

//router.get('/getonly/:id', handUsuario.personwithfulldata)

module.exports = router;