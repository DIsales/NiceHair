const pool = require('../lib/database/database');
const Servicio = require('../models/servicio.model');

const storageServicio = {}

storageServicio.create = (dataServicio) => {
    let Servicios = new Servicio()
    Servicios = dataServicio;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO SERVICIO (SERVICIO, PRECIO_S) VALUES (?,?);',
            [Servicios.SERVICIO, Servicios.PRECIO_S], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results)
                resolve(Servicios)
            })
    })
}

storageServicio.getAll = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM SERVICIO;', (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}

storageServicio.getOnly = async (ID) => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM SERVICIO WHERE IDSERVICIO = ?;', [ID], (err, results, fields) => {
            if (err) reject(err);
            
            if(results.length == 0){
                reject(404)
            }
            
            resolve(results)
        })
    })
}

storageServicio.update = async (upCase) => {
    let updata = new Servicio()
    updata = upCase;
    return new Promise((resolve, reject) => {
        pool.query('UPDATE SERVICIO SET SERVICIO = ?, PRECIO_S = ? WHERE IDSERVICIO = ?', [
            updata.SERVICIO, updata.PRECIO_S, updata.IDSERVICIO], (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results.affectedRows < 1) {
                     reject(404)
                }

                resolve(updata.IDSERVICIO)
            })
    })
}

storageServicio.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE SERVICIO WHERE IDSERVICIO = ?;', [id], (err, results, fields) => {
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

module.exports = storageServicio;