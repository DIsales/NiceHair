const pool = require('../lib/database/database');
const Venta = require('../models/venta.model');

const storageVenta = {}

storageVenta.create = (dataVenta) => {
    let Ventas = new Venta()
    Ventas = dataVenta;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO VENTA (IDCLIENTE, IDESTILISTA, IDSERVICIO) VALUES (?,?,?);',
            [Ventas.IDCLIENTE, Ventas.IDESTILISTA, Ventas.IDSERVICIO], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results)
                resolve(Ventas)
            })
    })
}

storageVenta.getAll = async () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT V.IDVENTA, V.IDCLIENTE, PC.PRIMERNOMBRE, PC.PRIMERAPELLIDO, V.IDESTILISTA, PE.PRIMERNOMBRE PRIMERNOMBRE_E, 
        PE.PRIMERAPELLIDO PRIMERAELLIDO_E, V.IDSERVICIO, S.SERVICIO, 
        
        S.PRECIO_S+BS.TOTAL+IFNULL(BP.TOTALP, 0) TOTALCOBRO,
        
        V.ESTADO 
        FROM VENTA V 
        INNER JOIN PERSONA PC ON V.IDCLIENTE = PC.IDPERSONA 
        INNER JOIN PERSONA PE ON V.IDESTILISTA = PE.IDPERSONA 
        INNER JOIN SERVICIO S ON V.IDSERVICIO = S.IDSERVICIO
        LEFT JOIN DET_SERV_PROD DSP ON S.IDSERVICIO = DSP.IDSERVICIO
        LEFT JOIN PRODUCTO P ON DSP.IDPRODUCTO = P.IDPRODUCTO
        
        LEFT JOIN (
        SELECT DSP.IDSERVICIO, SUM((P.PRECIO_V/P.CANTIDAD_U)*DSP.CANTIDAD) TOTAL FROM DET_SERV_PROD DSP
        LEFT JOIN SERVICIO S ON DSP.IDSERVICIO = S.IDSERVICIO
        LEFT JOIN PRODUCTO P ON DSP.IDPRODUCTO = P.IDPRODUCTO
        GROUP BY DSP.IDSERVICIO
        ) BS ON V.IDSERVICIO = BS.IDSERVICIO
        
        LEFT JOIN (
        SELECT DVP.IDVENTA, SUM((P.PRECIO_V/P.CANTIDAD_U)*DVP.CANTIDAD) TOTALP FROM DET_VENT_PROD DVP
        LEFT JOIN PRODUCTO P ON DVP.IDPRODUCTO = P.IDPRODUCTO
        GROUP BY DVP.IDVENTA
        ) BP ON V.IDVENTA = BP.IDVENTA
        
        WHERE V.ESTADO = 'AC'

        GROUP BY V.IDVENTA
        ;`, (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}

storageVenta.getCli = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT P.IDPERSONA, P.PRIMERNOMBRE, P.PRIMERAPELLIDO, TP.TIPO_PERSONA FROM PERSONA P INNER JOIN TIPO_PERSONA TP ON P .IDTIPO_PERSONA = TP.IDTIPO_PERSONA WHERE TP.IDTIPO_PERSONA = 1;', (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}

storageVenta.getEsti = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT P.IDPERSONA, P.PRIMERNOMBRE, P.PRIMERAPELLIDO, TP.TIPO_PERSONA, R.ROL FROM PERSONA P INNER JOIN TIPO_PERSONA TP ON P .IDTIPO_PERSONA = TP.IDTIPO_PERSONA LEFT JOIN USUARIO U ON P.IDPERSONA = U.IDPERSONA LEFT JOIN ROL R ON U.IDROL = R.IDROL WHERE TP.IDTIPO_PERSONA = 2 AND U.IDROL = 3;', (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}

storageVenta.getOnly = async (ID) => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT V.IDVENTA, V.IDCLIENTE, PC.PRIMERNOMBRE, PC.PRIMERAPELLIDO, V.IDESTILISTA, PE.PRIMERNOMBRE, PE.PRIMERAPELLIDO, V.IDSERVICIO, S.SERVICIO, V.ESTADO FROM VENTA V INNER JOIN PERSONA PC ON V.IDCLIENTE = PC.IDPERSONA INNER JOIN PERSONA PE ON V.IDESTILISTA = PE.IDPERSONA INNER JOIN SERVICIO S ON V.IDSERVICIO = S.IDSERVICIO WHERE IDVENTA = ?;', [ID], (err, results, fields) => {
            if (err) reject(err);
            
            if(results.length == 0){
                reject(404)
            }
            
            resolve(results)
        })
    })
}

storageVenta.update = async (upCase) => {
    let updata = new Venta()
    updata = upCase;
    return new Promise((resolve, reject) => {
        pool.query('UPDATE VENTA SET IDCLIENTE = ?, IDESTILISTA = ?, IDSERVICIO = ? WHERE IDVENTA = ?', [
            updata.IDCLIENTE, updata.IDESTILISTA, updata.IDSERVICIO, updata.IDVENTA], (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results.affectedRows < 1) {
                     reject(404)
                }

                resolve(updata.IDVENTA)
            })
    })
}

storageVenta.updateEstado = async (id) => {
    
    return new Promise((resolve, reject) => {
        pool.query('UPDATE VENTA SET ESTADO = ? WHERE IDVENTA = ?', [
             'BL', id], (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results.affectedRows < 1) {
                     reject(404)
                }

                resolve(id)
            })
    })
}

storageVenta.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE VENTA WHERE IDVENTA = ?;', [id], (err, results, fields) => {
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

module.exports = storageVenta;