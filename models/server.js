const express = require('express');
const cors = require('cors');
class Server{
    constructor(){

        this.app =express();
        this.port=process.env.PORT;//tengo acceso por ser variable global
        this.usuariosPath='/api/usuarios';
        //middlewares
        this.middlewares();
        //rutas de mi app
        this.routes(); //dispara los métodos
        
    }
    middlewares(){
        //CORS  
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio público
        this.app.use(express.static('public')); //es un middleware
    }
    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios')); //el path que usare en mi web es /api/usuarios
    }
    listen(){
        this.app.listen(this.port,() => { 
            console.log('Servidor corriendo en: ',this.port);
        });
    }
}

module.exports=Server;