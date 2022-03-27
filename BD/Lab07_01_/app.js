'use strict' // ACTIVA EL MODO STRICTO DE JAVASCRIPT

// REQUIRES
var express = require('express');


// CARGAR ARCHIVOS DE RUTAS
var merchan_routes = require('./routes/merchan');// WILSON
var suscriptor_routes = require('./routes/suscriptor');// Jss
var game_routes = require('./routes/game');// JEAN PIERRE
var socios_routes = require('./routes/socios');// LUIS
var patrocinadores_routes = require('./routes/patrocinadores');// ANGEL
var ropa_routes = require('./routes/ropa');// Ashley

// EJECUTAR EXPRESS
var app = express();

// ASIGNO EJS A LAS VISTAS
app.set('view engine', 'ejs');

// DECODIFCACION DE ENVIOS FORM
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// REESCRIBIR RUTAS
app.use('/',game_routes);// ESTA RUTA ES DE Jean pierre
app.use('/',ropa_routes);// ESTA RUTA ES DE ashley
app.use('/',suscriptor_routes);// 
app.use('/',socios_routes);// ESTA RUTA ES DE luis
app.use('/',patrocinadores_routes);// ESTA RUTA ES DE ANGEL
app.use('/',merchan_routes);// ESTA RUTA ES DE Wilson

// EXPORTAR MODULO
module.exports = app;