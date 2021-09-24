var tablapatrocinadores = localStorage.getItem("tablapatrocinadoresStorage"); // CREA VARIABLE
tablapatrocinadores = JSON.parse(tablapatrocinadores);  // TRANSFORMA A UNA VARIABLE JAVASCRIPT
if (tablapatrocinadores == null) { // El null es para que no quede vacio la tabla
    tablapatrocinadores = [];
}
listar();



function listar() { 
    console.log("Ingresando a listar..."); //console.log, Para mensajes generales de registro de información.

    var dataFila = '';
    if (tablapatrocinadores.length > 0) {
        for (const i in tablapatrocinadores) {
            var varpatrocinadores = JSON.parse(tablapatrocinadores[i]);//json, toda la variable de varmerchan lo va a convertir en una cadena de txto             
            dataFila += "<tr>";
            dataFila += "<td>" + varpatrocinadores.idempresa + "</td>";
            dataFila += "<td>" + varpatrocinadores.nombredelaempresa + "</td>";
            dataFila += "<td>" + varpatrocinadores.representante + "</td>";
            dataFila += "<td>" + varpatrocinadores.tiempodecontrato + "</td>";
            dataFila += "<td>" + varpatrocinadores.montoporpatrocinio + "</td>";
            dataFila += "<td>" +
                "<button type='button' class='btn btn-warning' onclick='abrirForm(" + // se crea el boton de editar 
                varpatrocinadores.Idempresa
                + ")'>EDITAR</button>"
            "</td>"

            dataFila += "</tr>";
        }
        document.getElementById("datapatrocinadores").innerHTML = dataFila;// getElementById, seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado
    }
}

function abrirForm(idForm) {
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("patrocinadores-form.html"); // window.location.replace, REDIRECCIONA A LA PAGINA merchan-form.html
}