const Detalle_VP = require('../models/det_vent_prod.model')
const storageDetalle_VP = require('../storage/det_vent_prod_storage')


const Detalle_VPService = {}


Detalle_VPService.create = async (dataDetalle_VP) => {
    var Detalle_VPs = new Detalle_VP()
    Detalle_VPs = dataDetalle_VP
    
    return await storageDetalle_VP.create(Detalle_VPs) 
}

Detalle_VPService.getAll = async () => {
    return await storageDetalle_VP.getAll();
}

Detalle_VPService.getOnly = async (ID) => {
    return await storageDetalle_VP.getOnly(ID)
}

Detalle_VPService.update = async (id, dataUpd) => {
    var update_data = new Detalle_VP()
    update_data = dataUpd

    update_data.IDDET_VENT_PROD = id
   
    return await storageDetalle_VP.update(update_data)
}

Detalle_VPService.delete = async (_id) => {
    return await storageDetalle_VP.delete(_id)
}
module.exports = Detalle_VPService