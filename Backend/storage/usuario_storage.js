const pool = require('../lib/database/database');
const Usuario = require('../models/usuario.model');

const storageUsuario = {}

storageUsuario.create = (dataUsuario) => {
    let Usuarios = new Usuario()
    Usuarios = dataUsuario;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO USUARIO (USUARIO, PASSWORD, IDROL, IDPERSONA) VALUES (?,?,?,?);',
            [Usuarios.USUARIO, Usuarios.PASSWORD, Usuarios.IDROL, Usuarios.IDPERSONA], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results)
                resolve(Usuarios)
            })
    })
}

storageUsuario.getAll = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT IDUSUARIO, USUARIO, U.IDROL, R.ROL, U.IDPERSONA, P.PRIMERNOMBRE, P.PRIMERAPELLIDO FROM USUARIO U INNER JOIN ROL R ON U.IDROL = R.IDROL INNER JOIN PERSONA P ON U.IDPERSONA = P.IDPERSONA;', (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}

storageUsuario.getOnly = async (ID) => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT IDUSUARIO, USUARIO, PASSWORD, U.IDROL, R.ROL, U.IDPERSONA, P.PRIMERNOMBRE, P.PRIMERAPELLIDO FROM USUARIO U INNER JOIN ROL R ON U.IDROL = R.IDROL INNER JOIN PERSONA P ON U.IDPERSONA = P.IDPERSONA WHERE IDUSUARIO = ?;', [ID], (err, results, fields) => {
            if (err) reject(err);
            
            if(results.length == 0){
                reject(404)
            }
            
            resolve(results)
        })
    })
}

storageUsuario.update = async (upCase) => {
    let updata = new Usuario()
    updata = upCase;
    return new Promise((resolve, reject) => {
        pool.query('UPDATE USUARIO SET USUARIO = ?, PASSWORD = ?, IDROL = ?, IDPERSONA = ? WHERE IDUSUARIO = ?', [
            updata.USUARIO, updata.PASSWORD, updata.IDROL, updata.IDPERSONA, updata.IDUSUARIO], (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results.affectedRows < 1) {
                     reject(404)
                }

                resolve(updata.IDUSUARIO)
            })
    })
}

storageUsuario.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE USUARIO WHERE IDUSUARIO = ?;', [id], (err, results, fields) => {
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

storageUsuario.login = (dataUsuario) => {
    let Usuarios = new Usuario()
    Usuarios = dataUsuario;

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM USUARIO WHERE USUARIO = ? AND PASSWORD = ?;',
            [Usuarios.USUARIO, Usuarios.PASSWORD], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                
                resolve(Usuarios)
            })
    })
}

module.exports = storageUsuario;