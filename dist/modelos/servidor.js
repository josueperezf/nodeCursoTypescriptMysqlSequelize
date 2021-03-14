"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servidor = void 0;
const express_1 = __importDefault(require("express"));
// yo no exporto la proìedad usuarioRoutes pero digamos que le estamos dando un alia a la export default del router
const usuario_routes_1 = __importDefault(require("../rutas/usuario.routes"));
const cors_1 = __importDefault(require("cors"));
const conexion_1 = __importDefault(require("../db/conexion"));
class Servidor {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = express_1.default();
        this.port = Number(process.env.PORT) || 8000;
        // metodos iniciales
        this.dbConexion();
        this.middleware();
        this.routes();
        // configuracion de la base de datos
    }
    dbConexion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conexion_1.default.authenticate();
                console.log('base de datos conectada');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middleware() {
        // cors
        this.app.use(cors_1.default());
        //lectura del body
        this.app.use(express_1.default.json());
        //carpeta public
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en ' + this.port);
        });
    }
}
exports.Servidor = Servidor;
//# sourceMappingURL=servidor.js.map