var tablaGame = localStorage.getItem("tablaGameStorage");
tablaGame = JSON.parse(tablaGame);
if (tablaGame == null) {
    tablaGame = [];
}
listar();



function listar() {
    console.log("Ingresando a listar...");

    var dataFila = '';
    if (tablaGame.length > 0) {
        for (const i in tablaGame) {
            var varGame = JSON.parse(tablaGame[i]);
            dataFila += "<tr>";
            dataFila += "<td>" + varGame.idJuego + "</td>";
            dataFila += "<td>" + varGame.nombre_juego + "</td>";
            dataFila += "<td>" + varGame.nombre_titular + "</td>";
            dataFila += "<td>" + varGame.empresa + "</td>";
            dataFila += "<td>" + varGame.telefono + "</td>";
            dataFila += "<td>" + varGame.estado + "</td>";
            dataFila += "<td>" +
                "<button type='button' class='btn btn-warning' onclick='abrirForm(" +
                varGame.idJuego
                + ")'>EDITAR</button>"
            "</td>"

            dataFila += "</tr>";
        }
        document.getElementById("dataGames").innerHTML = dataFila;
    }
}

function abrirForm(idForm) {
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("game-form.html"); // REDIRECCIONA A LA PAGINA pacientes.html
}