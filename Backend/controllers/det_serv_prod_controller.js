const { validationResult } = require('express-validator');
const http = require('../lib/utils/status.response')
const respondError = require('./respond');
const Detalle_SPService = require('../services/det_ser_prod_service')
const handDetalle_SP= {}


handDetalle_SP.create = async (req, res) => {
    const errorsrex = validationResult(req)
    if (!errorsrex.isEmpty()) {
        return res.status(http.StatusBadRequest).json({ errorsrex: errorsrex.array() });
    }

    try {
        let result = await Detalle_SPService.create(req.body)
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

handDetalle_SP.getAll = async (req, res) => {
    try {
        let results = await Detalle_SPService.getAll()
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


handDetalle_SP.getOnly = async (req, res) => {
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
        let results = await Detalle_SPService.getOnly(id)
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

handDetalle_SP.update = async (req, res) => {
    const errorsrex = validationResult(req)
    if (!errorsrex.isEmpty()) {
        return res.status(http.StatusBadRequest).json({ errorsrex: errorsrex.array() });
    }

    try {
        let result = await Detalle_SPService.update(req.params.id, req.body)
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

handDetalle_SP.deleteRol = async (req, res) => {
    try {
        let results = await Detalle_SPService.delete(req.params.id)
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

module.exports = handDetalle_SP;