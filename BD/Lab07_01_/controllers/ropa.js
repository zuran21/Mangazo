'use strict'

var client = require("../database/db");// PARA CONECTAR A LA BASE DE DATOS
var db = client.db("Nousdb"); //NOMBRE DE LA BASE DE DATOS 

var controller = {
    listar: function(req,res){
        console.log("--------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");

        db.collection("ropa").find().toArray().then(
            ropas =>{
               res.render('ropa_list',{dataRopas: ropas});// SE VA A LA VISTA
            }).catch(
                error => console.error(error)
            )
            ;
    },

    form: function(req,res){
        console.log("----^-----^----");
        console.log("Entrando a la funcion de form");
        var RopaSForm = {}
        RopaSForm.idRopa =0;
        RopaSForm.codigop = '';
        RopaSForm.modelo = '';
        RopaSForm.tipo = '';
        res.render('ropa_form',{ropaForm:RopaSForm});
    },
    save: function (req, res) {
        console.log("--------------------");
        console.log("ENTRANDO A LA FUNCION GUARDAR");
        db.collection("ropa").count().then(// OBTENER CUANTOS PRODUCTOS TENGO
            countRopas => {//OBTENER CUANTOS PRODUCTOS TENGO
                var ropa = {}
                ropa.idRopa = countRopas + 1;// NUEVO ID AUMENTAR EN 1
                ropa.codigop = req.body.codigop;
                ropa.modelo = req.body.modelo;
                ropa.tipo = req.body.tipo;
                console.log(ropa);
                db.collection("ropa").insertOne(ropa).then(
                    () => {
                        res.redirect('/ropa/list');
                    }
                ).catch(
                    error => console.error(error)
                );
            }
        );
    }
}

module.exports = controller;