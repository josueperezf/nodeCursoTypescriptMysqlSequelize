import express, {Application}  from 'express';
// yo no exporto la proìedad usuarioRoutes pero digamos que le estamos dando un alia a la export default del router
import usuarioRoutes from '../rutas/usuario.routes';
import cors from 'cors';
import db from '../db/conexion';

export class Servidor {
    private app: Application;
    private port: number;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 8000;
        // metodos iniciales
        this.dbConexion();
        this.middleware();
        this.routes();

        // configuracion de la base de datos
    }

    async dbConexion() {
        try {
            await db.authenticate();
            console.log('base de datos conectada');
            
        } catch (error) {
            throw new Error(error);
        }
    }
    middleware() {
        // cors
        this.app.use(cors() );
        //lectura del body
        this.app.use(express.json() );
        //carpeta public
        this.app.use(express.static('public') );
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, usuarioRoutes );
    }
    listen() {
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en '+ this.port);
        });
    }
}