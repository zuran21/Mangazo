'use strict'
var express = require('express');
var ropaController = require('./controllers/ropa');

var router = express.Router();


//rutas

router.get('/ropa/list',ropaController.listar);

module.exports = router;