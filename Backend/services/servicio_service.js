const Servicio = require('../models/servicio.model')
const storageServicio = require('../storage/servicio_storage')


const ServicioService = {}


ServicioService.create = async (dataServicio) => {
    var Servicios = new Servicio()
    Servicios = dataServicio
    
    return await storageServicio.create(Servicios) 
}

ServicioService.getAll = async () => {
    return await storageServicio.getAll();
}

ServicioService.getOnly = async (ID) => {
    return await storageServicio.getOnly(ID)
}

ServicioService.update = async (id, dataUpd) => {
    var update_data = new Servicio()
    update_data = dataUpd

    update_data.IDSERVICIO = id
   
    return await storageServicio.update(update_data)
}

ServicioService.delete = async (_id) => {
    return await storageServicio.delete(_id)
}
module.exports = ServicioService