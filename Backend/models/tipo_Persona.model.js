
/**
 * @param {string} IDTIPO_PERSONA INT PK 
 * @param {string} TIPO_PERSONA VARCHAR(20) 
 */

 class modelTipo_Persona{
    constructor(
        IDTIPO_PERSONA,
        TIPO_PERSONA
    ) {
        this.IDTIPO_PERSONA = IDTIPO_PERSONA
        this.TIPO_PERSONA = TIPO_PERSONA
    }
}

module.exports = modelTipo_Persona