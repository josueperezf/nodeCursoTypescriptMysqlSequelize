import { DataTypes } from 'sequelize';
import db from '../db/conexion';

// hace saneamiento de la base de dato, protege de inyecciones sql y demas
// sequelize coloca a cada tabla las columna createdAt y updatedAt, TIMESTAMP  se puede indicar que no se van a requerir, pero por default si los requiere
// createdAt	timestamp	NULL	NULL	NO	NULL	on update current_timestamp()		
const Usuario = db.define('Usuario',{
    nombre:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    estado:{
        //  como el la base de datos se coloco tinyint y aqui le digo que sera boolean, entonces me guardara unos y cero
        type: DataTypes.BOOLEAN
    }
});


export default Usuario;