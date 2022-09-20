const pool = require('../lib/database/database');
const Producto = require('../models/producto.model');

const storageProducto = {}

storageProducto.create = (dataProducto) => {
    let Productos = new Producto()
    Productos = dataProducto;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO PRODUCTO (PRODUCTO, STOCK, CANTIDAD, PRECIO_V, CANTIDAD_U, PRECIO_C) VALUES (?,?,?,?,?,?);',
            [Productos.PRODUCTO, Productos.STOCK, Productos.CANTIDAD, Productos.PRECIO_V, Productos.CANTIDAD_U, Productos.PRECIO_C], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results)
                resolve(Productos)
            })
    })
}

storageProducto.getAll = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PRODUCTO;', (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}

storageProducto.getOnly = async (ID) => {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PRODUCTO WHERE IDPRODUCTO = ?;', [ID], (err, results, fields) => {
            if (err) reject(err);
            
            if(results.length == 0){
                reject(404)
            }
            
            resolve(results)
        })
    })
}

storageProducto.update = async (upCase) => {
    let updata = new Producto()
    updata = upCase;
    return new Promise((resolve, reject) => {
        pool.query('UPDATE PRODUCTO SET PRODUCTO = ?, STOCK = ?, CANTIDAD = ?, PRECIO_V = ?, CANTIDAD_U = ?, PRECIO_C = ? WHERE IDPRODUCTO = ?', [
            updata.PRODUCTO, updata.STOCK, updata.CANTIDAD, updata.PRECIO_V, updata.CANTIDAD_U, updata.PRECIO_C, updata.IDPRODUCTO], (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results.affectedRows < 1) {
                     reject(404)
                }

                resolve(updata.IDPRODUCTO)
            })
    })
}

storageProducto.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE PRODUCTO WHERE IDPRODUCTO = ?;', [id], (err, results, fields) => {
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

module.exports = storageProducto;