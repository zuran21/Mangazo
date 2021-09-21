var tablaPaciente = localStorage.getItem("tablaPacienteStorage");
tablaPaciente = JSON.parse(tablaPaciente);
if (tablaPaciente == null) {
    tablaPaciente = [];
}
listar();



function listar() {
    console.log("Ingresando a listar...");

    var dataFila = '';
    if (tablaPaciente.length > 0) {
        for (const i in tablaPaciente) {
            var varPaciente = JSON.parse(tablaPaciente[i]);
            dataFila += "<tr>";
            dataFila += "<td>" + varPaciente.idPaciente + "</td>";
            dataFila += "<td>" + varPaciente.nombApellido + "</td>";
            dataFila += "<td>" + varPaciente.dni + "</td>";
            dataFila += "<td>" + varPaciente.telefono + "</td>";
            dataFila += "<td>" + varPaciente.direccion + "</td>";
            dataFila += "<td>" + varPaciente.estado + "</td>";
            dataFila += "<td>" +
                "<button type='button' class='btn btn-warning' onclick='abrirForm(" +
                varPaciente.idPaciente
                + ")'>EDITAR</button>"
            "</td>"

            dataFila += "</tr>";
        }
        document.getElementById("infoRopa").innerHTML = dataFila;
    }
}

function Registro(idForm) {
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("ropasp-form.html"); // REDIRECCIONA A LA PAGINA pacientes.html
}
