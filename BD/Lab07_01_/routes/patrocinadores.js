'use strict'

var express = require('express');
var PatrocinadoresController = require('../controllers/patrocinadores');// ARNOLD

var router = express.Router();

//RUTAS
router.get('/patrocinadores/list',PatrocinadoresController.listar);
router.get('/patrocinadores/form/0',PatrocinadoresController.form);
router.post('/patrocinadores/save',PatrocinadoresController.save);


module.exports = router;