'use strict'

var express = require('express');
var GamesController = require('../controllers/game');// ARNOLD

var router = express.Router();

//RUTAS
router.get('/game/list',GamesController.listar);
router.get('/game/form/0',GamesController.form);
router.post('/game/save',GamesController.save);
module.exports = router;