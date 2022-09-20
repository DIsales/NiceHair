require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()

const server = require('./lib/utils/env.config')

app.set('port', process.env.PORT || server.portserver || 3000)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes/rol.route'))
app.use(require('./routes/tipo_Persona.route'))
app.use(require('./routes/persona.route'))
app.use(require('./routes/usuario.route'))
app.use(require('./routes/servicio.route'))
app.use(require('./routes/producto.route'))
app.use(require('./routes/det_serv_prod.route'))
app.use(require('./routes/venta.route'))
app.use(require('./routes/det_vent_prod.route'))
app.use(require('./routes/reportes.route'))


app.listen(app.get('port'), () => {
    console.log(`Listen and server on port: ${app.get('port')}`);
});

