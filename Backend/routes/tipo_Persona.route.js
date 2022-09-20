const router = require('express').Router()
const handTPersona = require('../controllers/tipo_Persona_controller')


router.post('/tpersona/create', handTPersona.create)
router.get('/tpersonas/all', handTPersona.getAll)
router.get('/tpersona/:id', handTPersona.getOnly)
router.put('/tpersonaupd/:id', handTPersona.update)
router.delete('/tpersonadlt/:id', handTPersona.deleteRol)



//router.get('/getonly/:id', handRol.personwithfulldata)

module.exports = router;