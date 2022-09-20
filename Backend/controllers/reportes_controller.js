const { validationResult } = require('express-validator');
const http = require('../lib/utils/status.response')
const respondError = require('./respond');
const ReporteService = require('../services/reportes_service')
const handReporte= {}

handReporte.getAll = async (req, res) => {
    try {
        let results = await ReporteService.getAll()
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: results
            })
    } catch (error) {
        respondError(res, error)
        return
    }
}


handReporte.getOnly = async (req, res) => {
    let id = req.params.id
    console.log(id);
    if (id == undefined || id == null) {
        return res
            .status(http.StatusBadRequest)
            .json({
                ok: false
            })
    }

    try {
        let results = await ReporteService.getOnly(id)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: results
            })
    } catch (error) {

        if (error == 404) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    error: 'Ningún registro encontrado!'
                })
        }

        respondError(res, error)
        return
    }
}


module.exports = handReporte;