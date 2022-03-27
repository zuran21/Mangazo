'use strict'//activa el modo stricto de javascript

//require
var express = require('express');


//cargar archivos de rutas 
var ropa_routes = require('./routes/ropa');//ashley zifrikc
//var cliente

//ejecutar express
var app = express();

//asignar ejs a las vistas
app.use('view engine','ejs');

//decodificacion de envios form
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//reescribir rutas
app.use('/',ropa_routes);//ruta de ashley zifrikc

//exportar modulo
module.exports = app;