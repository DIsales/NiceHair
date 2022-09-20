const pool = require('../lib/database/database');
const Detalle_VP = require('../models/det_vent_prod.model');

const storageDetalle_VP = {}

storageDetalle_VP.create = (dataDetalle_VP) => {
    let Detalle_VPs = new Detalle_VP()
    Detalle_VPs = dataDetalle_VP;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO DET_VENT_PROD (IDVENTA, IDPRODUCTO, CANTIDAD) VALUES (?,?,?);',
            [Detalle_VPs.IDVENTA, Detalle_VPs.IDPRODUCTO, Detalle_VPs.CANTIDAD], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results)
                resolve(Detalle_VPs)
            })
    })
}

storageDetalle_VP.getAll = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT D.IDDET_VENT_PROD, D.IDVENTA, PC.PRIMERNOMBRE, PC.PRIMERAPELLIDO, D.IDPRODUCTO, P.PRODUCTO, D.CANTIDAD FROM DET_VENT_PROD D INNER JOIN VENTA V ON D.IDVENTA = V.IDVENTA INNER JOIN PERSONA PC ON V.IDCLIENTE = PC.IDPERSONA INNER JOIN PERSONA PE ON V.IDESTILISTA = PE.IDPERSONA INNER JOIN PRODUCTO P ON D.IDPRODUCTO = P.IDPRODUCTO;', (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}

storageDetalle_VP.getOnly = async (ID) => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT D.IDDET_VENT_PROD, D.IDVENTA, PC.PRIMERNOMBRE, PC.PRIMERAPELLIDO, D.IDPRODUCTO, P.PRODUCTO, D.CANTIDAD FROM DET_VENT_PROD D INNER JOIN VENTA V ON D.IDVENTA = V.IDVENTA INNER JOIN PERSONA PC ON V.IDCLIENTE = PC.IDPERSONA INNER JOIN PERSONA PE ON V.IDESTILISTA = PE.IDPERSONA INNER JOIN PRODUCTO P ON D.IDPRODUCTO = P.IDPRODUCTO WHERE D.IDVENTA = ?;', [ID], (err, results, fields) => {
            if (err) reject(err);
            
            if(results.length == 0){
                reject(404)
            }
            
            resolve(results)
        })
    })
}

storageDetalle_VP.update = async (upCase) => {
    let updata = new Detalle_VP()
    updata = upCase;
    return new Promise((resolve, reject) => {
        pool.query('UPDATE DET_VENT_PROD SET IDVENTA = ?, IDPRODUCTO = ?, CANTIDAD = ? WHERE IDDET_VENT_PROD = ?', [
            updata.IDVENTA, updata.IDPRODUCTO,updata.CANTIDAD, updata.IDDET_VENT_PROD], (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results.affectedRows < 1) {
                     reject(404)
                }

                resolve(updata.IDDET_VENT_PROD)
            })
    })
}

storageDetalle_VP.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE DET_VENT_PROD WHERE IDDET_VENT_PROD = ?;', [id], (err, results, fields) => {
            if (err) {
                reject(err)
            }
            if (results) {
                if (results[0][0].ErrorCode == 200) {
                    resolve(id)
                } else {
                    reject(results[0][0].ErrorCode)
                }
            }
        })
    })
}

module.exports = storageDetalle_VP;