'use strict'

var client = require("../database/db");// PARA CONECTAR A LA BASE DE DATOS
var db = client.db("Nousdb"); //NOMBRE DE LA BASE DE DATOS 

var controller = {
    listar: function(req,res){
        console.log("--------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");

        db.collection("merchan").find().toArray().then(
            merchans =>{
               res.render('merchan_list',{dataMerchans: merchans});// SE VA A LA VISTA
            }).catch(
                error => console.error(error)
            )
            ;
    },
    form: function(req,res){
        console.log("----^-----^----");
        console.log("Entrando a la funcion de form");
        var merchansForm = {}
        merchansForm.idMerchans =0;
        merchansForm.codigop = '';
        merchansForm.modelo = '';
        merchansForm.nombre = '';
        res.render('merchan_form',{merchansForm:merchansForm});
    },
    save: function (req, res) {
        console.log("--------------------");
        console.log("ENTRANDO A LA FUNCION GUARDAR");
        db.collection("merchans").count().then(// OBTENER CUANTOS PRODUCTOS TENGO
            countMerchans => {//OBTENER CUANTOS PRODUCTOS TENGO
                var merchans = {}
                merchans.idMerchans = countMerchans + 1;// NUEVO ID AUMENTAR EN 1
                merchans.codigop = req.body.codigop;
                merchans.modelo = req.body.modelo;
                merchans.nombre = req.body.nombre;
                console.log(merchans);
                db.collection("merchans").insertOne(merchans).then(
                    () => {
                        res.redirect('/merchans/list');
                    }
                ).catch(
                    error => console.error(error)
                );
            }
        );
    }
}

module.exports = controller;
