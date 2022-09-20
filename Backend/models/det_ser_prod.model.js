
/**
 * @param {string} IDDETALLE_SP INT PK 
 * @param {string} IDSERVICIO INT
 * @param {string} IDPRODUCTO INT 
 * @param {string} CANTIDAD INT 
 */

 class modelDetServProd{
    constructor(
        IDDETALLE_SP,
        IDSERVICIO,
        IDPRODUCTO,
        CANTIDAD
    ) {
        this.IDDETALLE_SP = IDDETALLE_SP
        this.IDSERVICIO = IDSERVICIO
        this.IDPRODUCTO = IDPRODUCTO
        this.CANTIDAD = CANTIDAD
    }
}

module.exports = modelDetServProd