var enviroment = require('../../config/env.config.json');
var node_env = process.env.NODE_ENV || 'development';

const ConfigServer = {
    portserver: enviroment[node_env].PORT_SERVER,
    host: enviroment[node_env].HOST_DATABASE,
    user: enviroment[node_env].DB_USER,
    password: enviroment[node_env].DB_PASSWORD,
    database: enviroment[node_env].DB_NAME
}

module.exports = ConfigServer;