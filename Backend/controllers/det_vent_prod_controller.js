const { validationResult } = require('express-validator');
const http = require('../lib/utils/status.response')
const respondError = require('./respond');
const Detalle_VPService = require('../services/det_vent_prod_service')
const handDetalle_VP= {}


handDetalle_VP.create = async (req, res) => {
    const errorsrex = validationResult(req)
    if (!errorsrex.isEmpty()) {
        return res.status(http.StatusBadRequest).json({ errorsrex: errorsrex.array() });
    }

    try {
        let result = await Detalle_VPService.create(req.body)
        console.log(req.body)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                message: "solicitud exitosa",
                data: result
            })
    } catch (error) {
        respondError(res, error)
        return
    }
}

handDetalle_VP.getAll = async (req, res) => {
    try {
        let results = await Detalle_VPService.getAll()
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


handDetalle_VP.getOnly = async (req, res) => {
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
        let results = await Detalle_VPService.getOnly(id)
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

handDetalle_VP.update = async (req, res) => {
    const errorsrex = validationResult(req)
    if (!errorsrex.isEmpty()) {
        return res.status(http.StatusBadRequest).json({ errorsrex: errorsrex.array() });
    }

    try {
        let result = await Detalle_VPService.update(req.params.id, req.body)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                message: "El registro ha sido actualizado correctamente",
                data: result
            })
    } catch (error) {
        if (error == http.StatusNotFound) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    message: "El registro no ha sido encontrado!"
                })
        }

        respondError(res, error)
        return
    }
}

handDetalle_VP.deleteRol = async (req, res) => {
    try {
        let results = await Detalle_VPService.delete(req.params.id)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                message: "El registro ha sido borrado satisfactoriamente",
                data: results
            })

    } catch (error) {

        if (error == http.StatusConflict) {
            return res
                .status(http.StatusConflict)
                .json({
                    ok: false,
                    message: "El registro no puede ser borrado!",
                    reason: "Usuarios asociados a este registro"
                })
        }

        respondError(res, error);
        return
    }
}

module.exports = handDetalle_VP;