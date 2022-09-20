const pool = require('../lib/database/database');
const Detalle_SP = require('../models/det_ser_prod.model');

const storageDetalle_SP = {}

storageDetalle_SP.create = (dataDetalle_SP) => {
    let Detalle_SPs = new Detalle_SP()
    Detalle_SPs = dataDetalle_SP;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO DET_SERV_PROD (IDSERVICIO, IDPRODUCTO, CANTIDAD) VALUES (?,?,?);',
            [Detalle_SPs.IDSERVICIO, Detalle_SPs.IDPRODUCTO, Detalle_SPs.CANTIDAD], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results)
                resolve(Detalle_SPs)
            })
    })
}

storageDetalle_SP.getAll = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT IDDETALLE_SP, DET.IDSERVICIO, S.SERVICIO, DET.IDPRODUCTO, P.PRODUCTO, DET.CANTIDAD FROM DET_SERV_PROD DET INNER JOIN SERVICIO S ON DET.IDSERVICIO = S.IDSERVICIO INNER JOIN PRODUCTO P ON DET.IDPRODUCTO = P.IDPRODUCTO ORDER BY S.SERVICIO, P.PRODUCTO;', (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}

storageDetalle_SP.getOnly = async (ID) => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT IDDETALLE_SP, DET.IDSERVICIO, S.SERVICIO, DET.IDPRODUCTO, P.PRODUCTO, DET.CANTIDAD FROM DET_SERV_PROD DET INNER JOIN SERVICIO S ON DET.IDSERVICIO = S.IDSERVICIO INNER JOIN PRODUCTO P ON DET.IDPRODUCTO = P.IDPRODUCTO WHERE IDDETALLE_SP = ?;', [ID], (err, results, fields) => {
            if (err) reject(err);
            
            if(results.length == 0){
                reject(404)
            }
            
            resolve(results)
        })
    })
}

storageDetalle_SP.update = async (upCase) => {
    let updata = new Detalle_SP()
    updata = upCase;
    return new Promise((resolve, reject) => {
        pool.query('UPDATE DET_SERV_PROD SET IDSERVICIO = ?, IDPRODUCTO = ?, CANTIDAD = ? WHERE IDDETALLE_SP = ?', [
            updata.IDSERVICIO, updata.IDPRODUCTO,updata.CANTIDAD, updata.IDDETALLE_SP], (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results.affectedRows < 1) {
                     reject(404)
                }

                resolve(updata.IDDETALLE_SP)
            })
    })
}

storageDetalle_SP.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE DET_SERV_PROD WHERE IDDETALLE_SP = ?;', [id], (err, results, fields) => {
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

module.exports = storageDetalle_SP;