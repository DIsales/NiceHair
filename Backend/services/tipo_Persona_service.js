const TPersona = require('../models/tipo_Persona.model')
const storageTPersona = require('../storage/tipo_Persona_storage')


const TPersonaService = {}


TPersonaService.create = async (dataTPersona) => {
    var TPersonas = new TPersona()
    TPersonas = dataTPersona
    
    return await storageTPersona.create(TPersonas) 
}

TPersonaService.getAll = async () => {
    return await storageTPersona.getAll();
}

TPersonaService.getOnly = async (ID) => {
    return await storageTPersona.getOnly(ID)
}

TPersonaService.update = async (id, dataUpd) => {
    var update_data = new TPersona()
    update_data = dataUpd

    update_data.IDTIPO_PERSONA = id
   
    return await storageTPersona.update(update_data)
}

TPersonaService.delete = async (_id) => {
    return await storageTPersona.delete(_id)
}
module.exports = TPersonaService