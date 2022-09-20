
/**
 * @param {string} IDSERVICIO INT PK 
 * @param {string} SERVICIO VARCHAR(45) 
 * @param {string} PRECIO_S DECIMAL(6,2) 
 */

 class modelServicio{
    constructor(
        IDSERVICIO,
        SERVICIO,
        PRECIO_S
    ) {
        this.IDSERVICIO = IDSERVICIO
        this.SERVICIO = SERVICIO
        this.PRECIO_S = PRECIO_S
    }
}

module.exports = modelServicio