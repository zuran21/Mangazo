var RopaTable = localStorage.getItem("RopaTableStorage");
RopaTable = JSON.parse(RopaTable);
if (RopaTable == null) {
    RopaTable = [];
}
Datarg();



function Datarg() {
    console.log("Datarg...");

    var dataRopa = '';
    if (RopaTable.length > 0) {
        for (const i in RopaTable) {
            var prenda = JSON.parse(RopaTable[i]);
            dataRopa += "<tr>";
            dataRopa += "<td>" + prenda.idRopa+ "</td>";
            dataRopa += "<td>" + prenda.Codigo+ "</td>";
            dataRopa += "<td>" + prenda.nomProducto + "</td>";
            dataRopa += "<td>" + prenda.tipoRopa + "</td>";
            dataRopa += "<td>" + prenda.Cantidad + "</td>";
            dataRopa += "<td>" + prenda.estado + "</td>";
            dataRopa += "<td>" +
                "<button type='button' class='btn btn-warning' onclick='Registro(" +
                prenda.idRopa
                + ")'>EDITAR</button>"
            "</td>"

            dataRopa += "</tr>";
        }
        document.getElementById("infoRopa").innerHTML = dataRopa;
    }
}

function Registro(IdRegistro) {
    localStorage.setItem("IdRegistro", JSON.stringify(IdRegistro));
    window.location.replace("Ropas-Form.html"); // REDIRECCIONA A LA PAGINA pacientes.html
}