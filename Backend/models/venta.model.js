
/**
 * @param {string} IDVENTA INT PK 
 * @param {string} IDCLIENTE INT
 * @param {string} IDESTILISTA INT 
 * @param {string} IDSERVICIO INT 
 */

 class modelVenta{
    constructor(
        IDVENTA,
        IDCLIENTE,
        IDESTILISTA,
        IDSERVICIO
    ) {
        this.IDVENTA = IDVENTA
        this.IDCLIENTE = IDCLIENTE
        this.IDESTILISTA = IDESTILISTA
        this.IDSERVICIO = IDSERVICIO
    }
}

module.exports = modelVenta