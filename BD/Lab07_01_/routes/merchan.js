'use strict'

var express = require('express');
var MerchanController = require('../controllers/merchan');// ARNOLD

var router = express.Router();

//RUTAS
router.get('/merchan/list',MerchanController.listar);
router.get('/merchan/form/0',MerchanController.form);
router.post('/merchan/save',MerchanController.save);


module.exports = router;