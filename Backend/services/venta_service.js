const Venta = require('../models/venta.model')
const storageVenta = require('../storage/venta_storage')


const VentaService = {}


VentaService.create = async (dataVenta) => {
    var Ventas = new Venta()
    Ventas = dataVenta
    
    return await storageVenta.create(Ventas) 
}

VentaService.getAll = async () => {
    return await storageVenta.getAll();
}

VentaService.getCli = async () => {
    return await storageVenta.getCli();
}

VentaService.getEsti = async () => {
    return await storageVenta.getEsti();
}

VentaService.getOnly = async (ID) => {
    return await storageVenta.getOnly(ID)
}

VentaService.update = async (id, dataUpd) => {
    var update_data = new Venta()
    update_data = dataUpd

    update_data.IDVENTA = id
   
    return await storageVenta.update(update_data)
}

VentaService.updateEstado = async (id) => {
   
    return await storageVenta.updateEstado(id)
}

VentaService.delete = async (_id) => {
    return await storageVenta.delete(_id)
}
module.exports = VentaService