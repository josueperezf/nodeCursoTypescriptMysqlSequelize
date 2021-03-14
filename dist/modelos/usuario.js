"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
// hace saneamiento de la base de dato, protege de inyecciones sql y demas
// sequelize coloca a cada tabla las columna createdAt y updatedAt, TIMESTAMP  se puede indicar que no se van a requerir, pero por default si los requiere
// createdAt	timestamp	NULL	NULL	NO	NULL	on update current_timestamp()		
const Usuario = conexion_1.default.define('Usuario', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        //  como el la base de datos se coloco tinyint y aqui le digo que sera boolean, entonces me guardara unos y cero
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map