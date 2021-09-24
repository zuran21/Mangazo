var tablaSocios = localStorage.getItem("tablaSociosStorage");
tablaSocios = JSON.parse(tablaSocios);
if (tablaSocios == null) {
    tablaGame = [];
}
listar();

function listar() {
    console.log("Ingresando a listar...");

    var dataFila = '';
    if (tablaSocios.length > 0) {
        for (const i in tablaSocios) {
            var varGame = JSON.parse(tablaSocios[i]); // json, toda la variables las convierte  en una cadena de texto
            dataFila += "<td>" + varGame.idJuego + "</td>";
            dataFila += "<td>" + varGame.nombre_juego + "</td>";
            dataFila += "<td>" + varGame.nombre_titular + "</td>";
            dataFila += "<td>" + varGame.empresa + "</td>";
            dataFila += "<td>" + varGame.telefono + "</td>";
            dataFila += "<td>" + varGame.estado + "</td>";

            dataFila += "<td>" +
                "<button type='button' class='btn btn-warning' onclick='abrirForm(" + // se crea el boton de editar 
                varGame.IdJuego
                + ")'>EDITAR</button>"
            "</td>"
            dataFila += "</tr>";
        }
        document.getElementById("dataGames").innerHTML = dataFila; // getElementById, seleccionar un elemento del documento 
    }                                                              //por medio del valor del atributo id que se le haya asignado
}

function abrirForm(idForm) {
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("socios-form.html"); // REDIRECCIONA A LA PAGINA socios.html
}
