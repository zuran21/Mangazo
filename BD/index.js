'use strict'

var mongoose = require('mongoose')
var app = require('./app')                          //importar el archivo app
var port = process.env.port || 3999;                //puerto servidor

mongoose.Promise = global.Promise;                  //promise permite esperar al sistema para que no se caiga el sistema
mongoose.connect('mongodb://localhost:27017/Nousbd',{ useNewUrlParser: true})
.then(                                              // permite entrar a una function
    () =>{
        console.log('Exito al conectarse con la base de datos de Nous'),
        //crear servidor
        app.listen(port,()=>{
            console.log('El servidor https://localhost:3999 esta funcionando.');
        });
    }
    
)
.catch(error=> console.log(error));