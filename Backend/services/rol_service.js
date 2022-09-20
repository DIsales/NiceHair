const Rol = require('../models/rol.model')
const storageRol = require('../storage/rol_storage')


const RolService = {}


RolService.create = async (dataRol) => {
    var Rols = new Rol()
    Rols = dataRol
    
    return await storageRol.create(Rols) 
}

RolService.getAll = async () => {
    return await storageRol.getAll();
}

RolService.getOnly = async (ID) => {
    return await storageRol.getOnly(ID)
}

RolService.update = async (id, dataUpd) => {
    var update_data = new Rol()
    update_data = dataUpd

    update_data.IDROL = id
   
    return await storageRol.update(update_data)
}

RolService.delete = async (_id) => {
    return await storageRol.delete(_id)
}
module.exports = RolService