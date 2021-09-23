var tablaMerchan = localStorage.getItem("tablaMerchanStorage"); // CREA VARIABLE
tablaMerchan = JSON.parse(tablaMerchan);  // TRANSFORMA A UNA VARIABLE JAVASCRIPT
if (tablaMerchan == null) { // El null es para que no quede vacio la tabla
    tablaMerchan = [];
}
listar();



function listar() { 
    console.log("Ingresando a listar..."); //console.log, Muestra un mensaje en la consola web 

    var dataFila = '';
    if (tablaMerchan.length > 0) {
        for (const i in tablaMerchan) {
            var varMerchan = JSON.parse(tablaMerchan[i]);//json, toda la variable de varmerchan lo va a convertir en una cadena de txto             
            dataFila += "<tr>";
            dataFila += "<td>" + varMerchan.Iddelproducto + "</td>";
            dataFila += "<td>" + varMerchan.nombredelproducto + "</td>";
            dataFila += "<td>" + varMerchan.modelo + "</td>";
            dataFila += "<td>" + varMerchan.precio + "</td>";
            dataFila += "<td>" + varMerchan.descuento + "</td>";
            dataFila += "<td>" + varMerchan.stock + "</td>";
            dataFila += "<td>" +
                "<button type='button' class='btn btn-warning' onclick='abrirForm(" + // se crea el boton de editar 
                varMerchan.Iddelproducto
                + ")'>EDITAR</button>"
            "</td>"

            dataFila += "</tr>";
        }
        document.getElementById("dataMerchan").innerHTML = dataFila;// getElementById, seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado
    }
}

function abrirForm(idForm) {
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("merchan-form.html"); // window.location.replace, REDIRECCIONA A LA PAGINA merchan-form.html
}