'use strict'

var client = require("../database/db");// PARA CONECTAR A LA BASE DE DATOS
var db = client.db("Nousdb"); //NOMBRE DE LA BASE DE DATOS 

var controller = {
    listar: function(req,res){
        console.log("--------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");

        db.collection("socios").find().toArray().then(
            socios =>{
               res.render('socios_list',{dataSocios: socios});// SE VA A LA VISTA
            }).catch(
                error => console.error(error)
            )
            ;
    },
    form: function(req,res){
        console.log("----^-----^----");
        console.log("Entrando a la funcion de form");
        var sociosForm = {}
        sociosForm.idSocios =0;
        sociosForm.codigo = '';
        sociosForm.nombre= '';
        sociosForm.apellido = '';
        res.render('socios_form',{sociosForm:sociosForm});
    },
    save: function (req, res) {
        console.log("--------------------");
        console.log("ENTRANDO A LA FUNCION GUARDAR");
        db.collection("socios").count().then(// OBTENER CUANTOS PRODUCTOS TENGO
            countSocios => {//OBTENER CUANTOS PRODUCTOS TENGO
                var socios = {}
                socios.idSocios = countSocios + 1;// NUEVO ID AUMENTAR EN 1
                socios.codigo = req.body.codigo;
                socios.nombre = req.body.nombre;
                socios.apellido = req.body.apellido;
                console.log(socios);
                db.collection("socios").insertOne(socios).then(
                    () => {
                        res.redirect('/socios/list');
                    }
                ).catch(
                    error => console.error(error)
                );
            }
        );
    }
}

module.exports = controller;
