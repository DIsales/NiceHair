const router = require('express').Router()
const handPersona = require('../controllers/persona_controller')


router.post('/persona/create', handPersona.create)
router.get('/personas/all', handPersona.getAll)
router.get('/persona/:id', handPersona.getOnly)
router.put('/personaupd/:id', handPersona.update)
router.delete('/personadlt/:id', handPersona.deleteRol)



//router.get('/getonly/:id', handPersona.personwithfulldata)

module.exports = router;