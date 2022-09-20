const Detalle_SP = require('../models/det_ser_prod.model')
const storageDetalle_SP = require('../storage/det_ser_prod_storage')


const Detalle_SPService = {}


Detalle_SPService.create = async (dataDetalle_SP) => {
    var Detalle_SPs = new Detalle_SP()
    Detalle_SPs = dataDetalle_SP
    
    return await storageDetalle_SP.create(Detalle_SPs) 
}

Detalle_SPService.getAll = async () => {
    return await storageDetalle_SP.getAll();
}

Detalle_SPService.getOnly = async (ID) => {
    return await storageDetalle_SP.getOnly(ID)
}

Detalle_SPService.update = async (id, dataUpd) => {
    var update_data = new Detalle_SP()
    update_data = dataUpd

    update_data.IDDETALLE_SP = id
   
    return await storageDetalle_SP.update(update_data)
}

Detalle_SPService.delete = async (_id) => {
    return await storageDetalle_SP.delete(_id)
}
module.exports = Detalle_SPService