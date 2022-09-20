const pool = require('../lib/database/database');
const Persona = require('../models/persona.model');

const storagePersona = {}

storagePersona.create = (dataPersona) => {
    let Personas = new Persona()
    Personas = dataPersona;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO PERSONA (PRIMERNOMBRE, SEGUNDONOMBRE, PRIMERAPELLIDO, SEGUNDOAPELLIDO, DPI, DIRECCION, IDTIPO_PERSONA) VALUES (?,?,?,?,?,?,?);',
            [Personas.PRIMERNOMBRE, Personas.SEGUNDONOMBRE, Personas.PRIMERAPELLIDO, Personas.SEGUNDOAPELLIDO, Personas.DPI, Personas.DIRECCION, Personas.IDTIPO_PERSONA], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results)
                resolve(Personas)
            })
    })
}

storagePersona.getAll = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT IDPERSONA, PRIMERNOMBRE, SEGUNDONOMBRE, PRIMERAPELLIDO, SEGUNDOAPELLIDO, DPI, DIRECCION, P . IDTIPO_PERSONA, TP . TIPO_PERSONA FROM PERSONA P INNER JOIN TIPO_PERSONA TP ON P . IDTIPO_PERSONA = TP . IDTIPO_PERSONA;', (err, results, fields) => {
        
            if (err) reject(err);

            resolve(results)
        })
    })
}

storagePersona.getOnly = async (ID) => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT IDPERSONA, PRIMERNOMBRE, SEGUNDONOMBRE, PRIMERAPELLIDO, SEGUNDOAPELLIDO, DPI, DIRECCION, P . IDTIPO_PERSONA, TP . TIPO_PERSONA FROM PERSONA P INNER JOIN TIPO_PERSONA TP ON P . IDTIPO_PERSONA = TP . IDTIPO_PERSONA WHERE IDPERSONA = ?;', [ID], (err, results, fields) => {
            if (err) reject(err);
            
            if(results.length == 0){
                reject(404)
            }
            
            resolve(results)
        })
    })
}

storagePersona.update = async (upCase) => {
    let updata = new Persona()
    updata = upCase;
    return new Promise((resolve, reject) => {
        pool.query('UPDATE PERSONA SET PRIMERNOMBRE = ?, SEGUNDONOMBRE = ?, PRIMERAPELLIDO = ?, SEGUNDOAPELLIDO = ?, DPI = ?, DIRECCION = ?, IDTIPO_PERSONA = ? WHERE IDPERSONA = ?', [
            updata.PRIMERNOMBRE, updata.SEGUNDONOMBRE, updata.PRIMERAPELLIDO, updata.SEGUNDOAPELLIDO, updata.DPI, updata.DIRECCION, updata.IDTIPO_PERSONA, updata.IDPERSONA], (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results.affectedRows < 1) {
                     reject(404)
                }

                resolve(updata.IDPERSONA)
            })
    })
}

storagePersona.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE PERSONA WHERE IDPERSONA = ?;', [id], (err, results, fields) => {
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

module.exports = storagePersona;