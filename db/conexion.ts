import { Sequelize } from 'sequelize';

const db =  new Sequelize('curso-node-fernando', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging:true es para ver en la consola cada comando sql q se esta ejecutando
    logging:true
});

export default db;