const Persona = require('../models/persona.model')
const storagePersona = require('../storage/persona_storage')


const PersonaService = {}


PersonaService.create = async (dataPersona) => {
    var Personas = new Persona()
    Personas = dataPersona
    
    return await storagePersona.create(Personas) 
}

PersonaService.getAll = async () => {
    return await storagePersona.getAll();
}

PersonaService.getOnly = async (ID) => {
    return await storagePersona.getOnly(ID)
}

PersonaService.update = async (id, dataUpd) => {
    var update_data = new Persona()
    update_data = dataUpd

    update_data.IDPERSONA = id
   
    return await storagePersona.update(update_data)
}

PersonaService.delete = async (_id) => {
    return await storagePersona.delete(_id)
}
module.exports = PersonaService