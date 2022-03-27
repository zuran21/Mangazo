'use strict'

var express = require('express');
var SociosController = require('../controllers/socios');// ARNOLD

var router = express.Router();

//RUTAS
router.get('/socios/list',SociosController.listar);
router.get('/socios/form/0',SociosController.form);
router.post('/socios/save',SociosController.save);
module.exports = router;