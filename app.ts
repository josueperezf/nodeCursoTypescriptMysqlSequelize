import dotenv  from 'dotenv';
import { Servidor } from './modelos/servidor';
dotenv.config();

const servidor = new  Servidor();

servidor.listen();