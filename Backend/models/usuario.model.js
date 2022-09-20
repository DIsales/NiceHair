
/**
 * @param {string} IDUSUARIO INT PK 
 * @param {string} USUARIO VARCHAR(45) 
 * @param {string} PASSWORD VARCHAR(200) 
 * @param {string} IDROL VARCHAR(200)
 * @param {string} IDPERSONA VARCHAR(200)
 */

 class modelUsuario{
    constructor(
        IDUSUARIO,
        USUARIO,
        PASSWORD,
        IDROL,
        IDPERSONA
    ) {
        this.IDUSUARIO = IDUSUARIO
        this.USUARIO = USUARIO
        this.PASSWORD = PASSWORD
        this.IDROL = IDROL
        this.IDPERSONA = IDPERSONA
    }
}

module.exports = modelUsuario