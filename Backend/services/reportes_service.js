const storageReporte = require('../storage/reportes_storage')


const ReporteService = {}

ReporteService.getAll = async () => {
    return await storageReporte.getAll();
}

ReporteService.getOnly = async (ID) => {
    return await storageReporte.getOnly(ID)
}

module.exports = ReporteService