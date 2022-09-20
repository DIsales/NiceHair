const router = require('express').Router()
const handRol = require('../controllers/rol_controller')


router.post('/rol/create', handRol.create)
router.get('/rols/all', handRol.getAll)
router.get('/rol/:id', handRol.getOnly)
router.put('/rolupd/:id', handRol.update)
router.delete('/roldlt/:id', handRol.deleteRol)



//router.get('/getonly/:id', handRol.personwithfulldata)

module.exports = router;