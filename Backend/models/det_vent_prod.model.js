
/**
 * @param {string} IDDET_VENT_PROD INT PK 
 * @param {string} IDVENTA INT
 * @param {string} IDPRODUCTO INT 
 * @param {string} CANTIDAD INT 
 */

 class modelDetVentProD{
    constructor(
        IDDET_VENT_PROD,
        IDVENTA,
        IDPRODUCTO,
        CANTIDAD
    ) {
        this.IDDET_VENT_PROD = IDDET_VENT_PROD
        this.IDVENTA = IDVENTA
        this.IDPRODUCTO = IDPRODUCTO
        this.CANTIDAD = CANTIDAD
    }
}

module.exports = modelDetVentProD