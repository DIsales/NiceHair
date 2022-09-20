const pool = require('../lib/database/database');
const Rol = require('../models/rol.model');

const storageRol = {}

storageRol.create = (dataRol) => {
    let Rols = new Rol()
    Rols = dataRol;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO ROL (ROL) VALUES (?);',
            [Rols.ROL], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results)
                resolve(Rols)
            })
    })
}

storageRol.getAll = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM ROL;', (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}

storageRol.getOnly = async (ID) => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM ROL WHERE IDROL = ?;', [ID], (err, results, fields) => {
            if (err) reject(err);
            
            if(results.length == 0){
                reject(404)
            }
            
            resolve(results)
        })
    })
}

storageRol.update = async (upCase) => {
    let updata = new Rol()
    updata = upCase;
    return new Promise((resolve, reject) => {
        pool.query('UPDATE ROL SET ROL = ? WHERE IDROL = ?', [
            updata.ROL, updata.IDROL], (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results.affectedRows < 1) {
                     reject(404)
                }

                resolve(updata.IDROL)
            })
    })
}

storageRol.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE ROL WHERE IDROL = ?;', [id], (err, results, fields) => {
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

module.exports = storageRol;