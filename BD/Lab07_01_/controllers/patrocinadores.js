'use strict'

var client = require("../database/db");// PARA CONECTAR A LA BASE DE DATOS
var db = client.db("Nousdb"); //NOMBRE DE LA BASE DE DATOS 

var controller = {
    listar: function(req,res){
        console.log("--------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");

        db.collection("patrocinadores").find().toArray().then(
            patrocinadores =>{
               res.render('patrocinadores_list',{dataPatrocinadores: patrocinadores});// SE VA A LA VISTA
            }).catch(
                error => console.error(error)
            )
            ;
    },
    form: function(req,res){
        console.log("----^-----^----");
        console.log("Entrando a la funcion de form");
        var patrocinadoresForm = {}
        patrocinadoresForm.idPatrocinadores =0;
        patrocinadoresForm.codigop = '';
        patrocinadoresForm.modelo = '';
        patrocinadoresForm.tipo = '';
        res.render('patrocinadores_form',{patrocinadoresForm:patrocinadoresForm});
    },
    save: function (req, res) {
        console.log("--------------------");
        console.log("ENTRANDO A LA FUNCION GUARDAR");
        db.collection("patrocinadores").count().then(// OBTENER CUANTOS PRODUCTOS TENGO
            countpatrocinadores => {//OBTENER CUANTOS PRODUCTOS TENGO
                var patrocinadores = {}
                patrocinadores.idPatrocinadores = countpatrocinadores + 1;// NUEVO ID AUMENTAR EN 1
                patrocinadores.codigop = req.body.codigop;
                patrocinadores.modelo = req.body.modelo;
                patrocinadores.tipo = req.body.tipo;
                console.log(patrocinadores);
                db.collection("patrocinadores").insertOne(patrocinadores).then(
                    () => {
                        res.redirect('/patrocinadores/list');
                    }
                ).catch(
                    error => console.error(error)
                );
            }
        );
    }
}

module.exports = controller;
