
/**
 * @param {string} IDROL INT PK 
 * @param {string} ROL VARCHAR(45) 
 * @param {string} FECHACREACION DATETIME 
 */

 class modelRol{
    constructor(
        IDROL,
        ROL,
        FECHACREACION
    ) {
        this.IDROL = IDROL
        this.ROL = ROL
        this.FECHACREACION = FECHACREACION
    }
}

module.exports = modelRol