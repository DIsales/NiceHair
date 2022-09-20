const Usuario = require('../models/usuario.model')
const storageUsuario = require('../storage/usuario_storage')


const UsuarioService = {}


UsuarioService.create = async (dataUsuario) => {
    var Usuarios = new Usuario()
    Usuarios = dataUsuario
    
    return await storageUsuario.create(Usuarios) 
}

UsuarioService.getAll = async () => {
    return await storageUsuario.getAll();
}

UsuarioService.getOnly = async (ID) => {
    return await storageUsuario.getOnly(ID)
}

UsuarioService.update = async (id, dataUpd) => {
    var update_data = new Usuario()
    update_data = dataUpd

    update_data.IDUSUARIO = id
   
    return await storageUsuario.update(update_data)
}

UsuarioService.delete = async (_id) => {
    return await storageUsuario.delete(_id)
}

UsuarioService.login = async (dataUsuario) => {
    var Usuarios = new Usuario()
    Usuarios = dataUsuario
    
    return await storageUsuario.login(Usuarios) 
}


module.exports = UsuarioService