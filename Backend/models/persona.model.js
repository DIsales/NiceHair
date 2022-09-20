
/**
 * @param {string} IDPERSONA INT PK 
 * @param {string} PRIMERNOMBRE VARCHAR(45) 
 * @param {string} SEGUNDONOMBRE VARCHAR(45) 
 * @param {string} PRIMERAPELLIDO VARCHAR(45) 
 * @param {string} SEGUNDOAPELLIDO VARCHAR(45) 
 * @param {string} DPI VARCHAR(45)
 * @param {string} DIRECCION VARCHAR(45)
 * @param {string} FECHACREACION DATETIME 
 * @param {string} IDTIPO_PERSONA INT FK 
 */

 class modelPersona{
    constructor(
        IDPERSONA,
        PRIMERNOMBRE, 
        SEGUNDONOMBRE, 
        PRIMERAPELLIDO,
        SEGUNDOAPELLIDO, 
        DPI,
        DIRECCION,
        FECHACREACION,
        IDTIPO_PERSONA
    ) {
        this.IDPERSONA = IDPERSONA
        this.PRIMERNOMBRE = PRIMERNOMBRE
        this.SEGUNDONOMBRE = SEGUNDONOMBRE
        this.PRIMERAPELLIDO = PRIMERAPELLIDO
        this.SEGUNDOAPELLIDO = SEGUNDOAPELLIDO
        this.DPI = DPI
        this.DIRECCION = DIRECCION
        this.FECHACREACION = FECHACREACION
        this.IDTIPO_PERSONA = IDTIPO_PERSONA
    }
}

module.exports = modelPersona