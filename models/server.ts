import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import contactoRoutes from '../routes/contacto';
import cors from 'cors'; 
 
import db from '../db/connection';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        contactos: '/contactos/datos',
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';
        
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes(); 
    }

    async dbConnection() {
        console.log('Conectando a base de datos......');

        try {
            await db.authenticate();
            console.log('\n Database online a traves de db.authenticate \n');
        } catch (error) {
            console.log("no se establecio comunicacion con la BD")
            throw "new Error(error )";
        }

    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public') );
    }


    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes ),
        this.app.use( this.apiPaths.contactos, contactoRoutes )

    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('\nServidor corriendo en puerto ' + this.port + '\n');
        })
    }

}

export default Server;