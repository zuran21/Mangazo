var tablaMerchan = localStorage.getItem("tablaMerchanStorage"); // CREA VARIABLE
tablaMerchan = JSON.parse(tablaMerchan);                        // TRANSFORMA A UNA VARIABLE JAVASCRIPT
if (tablaMerchan == null) {
    tablaMerchan = [];
}
listar();



function listar() {
    console.log("Ingresando a listar...");

    var dataFila = '';
    if (tablaMerchan.length > 0) {
        for (const i in tablaMerchan) {
            var varMerchan = JSON.parse(tablaMerchan[i]);
            dataFila += "<tr>";
            dataFila += "<td>" + varMerchan.Iddelproducto + "</td>";
            dataFila += "<td>" + varMerchan.nombredelproducto + "</td>";
            dataFila += "<td>" + varMerchan.categoria + "</td>";
            dataFila += "<td>" + varMerchan.precio + "</td>";
            dataFila += "<td>" + varMerchan.descuento + "</td>";
            dataFila += "<td>" + varMerchan.stop + "</td>";
            dataFila += "<td>" +
                "<button type='button' class='btn btn-warning' onclick='abrirForm(" +
                varMerchan.Iddelproducto
                + ")'>EDITAR</button>"
            "</td>"

            dataFila += "</tr>";
        }
        document.getElementById("dataMerchan").innerHTML = dataFila;
    }
}

function abrirForm(idForm) {
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("merchan-form.html"); // REDIRECCIONA A LA PAGINA pacientes.html
}