'use strict'

var express = require('express');
var ropaController = require('../controllers/ropa');// ARNOLD

var router = express.Router();

//RUTAS
router.get('/ropa/list',ropaController.listar);
router.get('/ropa/form/0',ropaController.form);
router.post('/ropa/save',ropaController.save);

module.exports = router;