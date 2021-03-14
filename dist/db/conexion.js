"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('curso-node-fernando', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging:true es para ver en la consola cada comando sql q se esta ejecutando
    logging: true
});
exports.default = db;
//# sourceMappingURL=conexion.js.map