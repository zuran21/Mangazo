var tablaPaciente = localStorage.getItem("tablaPacienteStorage"); // CREA VARIABLE
tablaPaciente = JSON.parse(tablaPaciente);                        // TRANSFORMA A UNA VARIABLE JAVASCRIPT
if (tablaPaciente == null) {
    tablaPaciente = [];
}

var IdRegistro = localStorage.getItem("IdRegistro");
IdRegistro = JSON.parse(IdRegistro);
if (IdRegistro == null) {
    IdRegistro = 0;
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
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            var objRopa = JSON.stringify({
                IdRopa: (IdRegistro > 0) ? IdRegistro : (tablaPaciente.length + 1),
                nombApellido: document.getElementById("txtCodigoP").value,
                dni: document.getElementById("txtModelo").value,
                telefono: document.getElementById("txtTipoRopa").value,
                direccion: document.getElementById("txtCantidad").value,
                estado: document.getElementById("cboEstado").value
            });

            //console.log(objPaciente);

            //GUARDAMOS EN LOCAL STORAGE
            // AGREGA EL OBJETO A LA VARIABLA TABLAPACIENTE
            if (IdRegistro > 0) {
                for (const i in tablaPaciente) {
                    var varPaciente = JSON.parse(tablaPaciente[i]);
                    if (varPaciente.idPaciente ==IdRegistro) {
                        tablaPaciente[i] = objRopa;
                        break;
                    }
                }
            } else {
                tablaPaciente.push(objRopa);
            }
            localStorage.setItem("tablaPacienteStorage", JSON.stringify(tablaPaciente));


            Swal.fire('Se guardaron los datos !', '', 'success').then((result) => {
                window.location.replace("Ropas.html"); // REDIRECCIONA A LA PAGINA pacientes.html
            })
        } else if (result.isDenied) {
            Swal.fire('Cambios no Guardados', '', 'info')
        }
    });

}

function cargarPagina() {
    if (IdRegistro > 0) {
        for (const i in tablaPaciente) {
            var varPaciente = JSON.parse(tablaPaciente[i]);
            if (varPaciente.idPaciente == IdRegistro) {
                document.getElementById("txtIdRopa").value = varPaciente.idPaciente;
                document.getElementById("txtCodigoP").value = varPaciente.nombApellido;
                document.getElementById("txtModelo").value = varPaciente.dni;
                document.getElementById("txtTipoRopa").value = varPaciente.telefono;
                document.getElementById("txtCantidad").value = varPaciente.direccion;
                document.getElementById("cboEstado").value = varPaciente.estado;
                break;
            }
        }
    }
}