var tablaPaciente = localStorage.getItem("tablaPacienteStorage"); // CREA VARIABLE
tablaPaciente = JSON.parse(tablaPaciente);                        // TRANSFORMA A UNA VARIABLE JAVASCRIPT
if (tablaPaciente == null) {
    tablaPaciente = [];
}

var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
    idForm = 0;
}

cargarPagina();

function guardar() {
    Swal.fire({
        title: 'GUARDAR',
        html: ' DESEA GUARDAR CAMBIOS?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
    }).then((result) => {
        /*s */
        if (result.isConfirmed) {
            var objPaciente = JSON.stringify({
                idPaciente: (idForm > 0) ? idForm : (tablaPaciente.length + 1),
                nombApellido: document.getElementById("txtCodigo").value,
                dni: document.getElementById("txtNombProducto").value,
                telefono: document.getElementById("txtTipoRopa").value,
                direccion: document.getElementById("txtCantidad").value,
                estado: document.getElementById("cboEstado").value
            });

            

            //GUARDAMOS EN LOCAL STORAGE
            // AGREGA EL OBJETO A LA VARIABLA TABLAPACIENTE
            if (idForm > 0) {
                for (const i in tablaPaciente) {
                    var varPaciente = JSON.parse(tablaPaciente[i]);
                    if (varPaciente.idPaciente == idForm) {
                        tablaPaciente[i] = objPaciente;
                        break;
                    }
                }
            } else {
                tablaPaciente.push(objPaciente);
            }
            localStorage.setItem("tablaPacienteStorage", JSON.stringify(tablaPaciente));


            Swal.fire('Se guardaron los datos !', '', 'success').then((result) => {
                window.location.replace("Ropasp.html"); // REDIRECCIONA A LA PAGINA pacientes.html
            })
        } else if (result.isDenied) {
            Swal.fire('Cambios no Guardados', '', 'info')
        }
    });

}

function cargarPagina() {
    if (idForm > 0) {
        for (const i in tablaPaciente) {
            var varPaciente = JSON.parse(tablaPaciente[i]);
            if (varPaciente.idPaciente == idForm) {
                document.getElementById("txtIdPaciente").value = varPaciente.idPaciente;
                document.getElementById("txtNombApellido").value = varPaciente.nombApellido;
                document.getElementById("txtDni").value = varPaciente.dni;
                document.getElementById("txtTelefono").value = varPaciente.telefono;
                document.getElementById("txtDireccion").value = varPaciente.direccion;
                document.getElementById("cboEstado").value = varPaciente.estado;
                break;
            }
        }
    }
}