'use strict'

var client = require("../database/db");// PARA CONECTAR A LA BASE DE DATOS
var db = client.db("Nousdb"); //NOMBRE DE LA BASE DE DATOS 

var controller = {
    listar: function(req,res){
        console.log("--------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");

        db.collection("game").find().toArray().then(
            games =>{
               res.render('game_list',{dataGames: games});// SE VA A LA VISTA
            }).catch(
                error => console.error(error)
            )
            ;
    },
    form: function(req,res){
        console.log("----^-----^----");
        console.log("Entrando a la funcion de form");
        var gameForm = {}
        gameForm.idGame =0;
        gameForm.codigop = '';
        gameForm.modelo = '';
        gameForm.tipo = '';
        res.render('game_form',{gameForm:gameForm});
    },
    save: function (req, res) {
        console.log("--------------------");
        console.log("ENTRANDO A LA FUNCION GUARDAR");
        db.collection("game").count().then(// OBTENER CUANTOS PRODUCTOS TENGO
            countgame => {//OBTENER CUANTOS PRODUCTOS TENGO
                var game = {}
                game.idGame = countgame + 1;// NUEVO ID AUMENTAR EN 1
                game.codigop = req.body.codigop;
                game.modelo = req.body.modelo;
                game.tipo = req.body.tipo;
                console.log(game);
                db.collection("game").insertOne(game).then(
                    () => {
                        res.redirect('/game/list');
                    }
                ).catch(
                    error => console.error(error)
                );
            }
        );
    }
}

module.exports = controller;
