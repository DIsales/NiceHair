const Producto = require('../models/producto.model')
const storageProducto = require('../storage/producto_storage')


const ProductoService = {}


ProductoService.create = async (dataProducto) => {
    var Productos = new Producto()
    Productos = dataProducto
    
    return await storageProducto.create(Productos) 
}

ProductoService.getAll = async () => {
    return await storageProducto.getAll();
}

ProductoService.getOnly = async (ID) => {
    return await storageProducto.getOnly(ID)
}

ProductoService.update = async (id, dataUpd) => {
    var update_data = new Producto()
    update_data = dataUpd

    update_data.IDPRODUCTO = id
   
    return await storageProducto.update(update_data)
}

ProductoService.delete = async (_id) => {
    return await storageProducto.delete(_id)
}
module.exports = ProductoService