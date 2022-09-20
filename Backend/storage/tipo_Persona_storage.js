const pool = require('../lib/database/database');
const TPersona = require('../models/tipo_Persona.model');

const storageTPersona = {}

storageTPersona.create = (dataTPersona) => {
    let TPersonas = new TPersona()
    TPersonas = dataTPersona;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO TIPO_PERSONA (TIPO_PERSONA) VALUES (?);',
            [TPersonas.TIPO_PERSONA], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results)
                resolve(TPersonas)
            })
    })
}

storageTPersona.getAll = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM TIPO_PERSONA;', (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}

storageTPersona.getOnly = async (ID) => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM TIPO_PERSONA WHERE IDTIPO_PERSONA = ?;', [ID], (err, results, fields) => {
            if (err) reject(err);
            
            if(results.length == 0){
                reject(404)
            }
            
            resolve(results)
        })
    })
}

storageTPersona.update = async (upCase) => {
    let updata = new TPersona()
    updata = upCase;
    return new Promise((resolve, reject) => {
        pool.query('UPDATE TIPO_PERSONA SET TIPO_PERSONA = ? WHERE IDTIPO_PERSONA = ?', [
            updata.TIPO_PERSONA, updata.IDTIPO_PERSONA], (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results.affectedRows < 1) {
                     reject(404)
                }

                resolve(updata.IDTIPO_PERSONA)
            })
    })
}

storageTPersona.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE TIPO_PERSONA WHERE IDTIPO_PERSONA = ?;', [id], (err, results, fields) => {
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

module.exports = storageTPersona;