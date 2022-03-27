'use strict'

var client = require('..//database/db');//para conectar ala base de datos
var db =client.db("Ropadb");

var controller ={
    listar: function(req,res){
        console.log("--------------");
        console.log("Entrando ala funcion listar");

        db.colection("ropa").find().toArray().then(
            ropa =>{
                res.render('ropa_list',{dataRopa: ropa});
            }).catch(
            error =>console.error(error)
            )
            ;
    }
}

module.exports = controller;