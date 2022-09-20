
/**
 * @param {string} IDPRODUCTO INT PK 
 * @param {string} PRODUCTO VARCHAR(45) 
 * @param {string} STOCK INT 
 * @param {string} CANTIDAD INT 
 * @param {string} PRECIO_V DECIMAL(6,2) 
 * @param {string} CANTIDAD_U INT
 * @param {string} PRECIO_C DECIMAL(6,2) 
 */

 class modelProducto{
    constructor(
        IDPRODUCTO,
        PRODUCTO,
        STOCK,
        CANTIDAD,
        PRECIO_V,
        CANTIDAD_U,
        PRECIO_C
    ) {
        this.IDPRODUCTO = IDPRODUCTO
        this.PRODUCTO = PRODUCTO
        this.STOCK = STOCK
        this.CANTIDAD = CANTIDAD
        this.PRECIO_V = PRECIO_V
        this.CANTIDAD_U = CANTIDAD_U
        this.PRECIO_C = PRECIO_C
    }
}

module.exports = modelProducto