'use strict'

var express = require('express');
var SuscriptorController = require('../controllers/suscriptor');// ARNOLD

var router = express.Router();

//RUTAS
router.get('/suscriptor/list',SuscriptorController.listar);

module.exports = router;