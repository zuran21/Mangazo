var RopaTable = localStorage.getItem("RopaTableStorage"); // CREA VARIABLE
RopaTable = JSON.parse(RopaTable);                        // TRANSFORMA A UNA VARIABLE JAVASCRIPT
if (RopaTable == null) {
    RopaTable = [];
}

var IdRegistro = localStorage.getItem("IdRegistro");
IdRegistro = JSON.parse(IdRegistro);
if (IdRegistro == null) {
    IdRegistro = 0;
}
IdRegistro
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
                IdRopa: (IdRegistro > 0) ? IdRegistro : (RopaTable.length + 1),
                Codigo: document.getElementById("txtCodigoP").value,
                nomProducto: document.getElementById("txtModelo").value,
                tipoRopa: document.getElementById("txtTipoRopa").value,
                Cantidad: document.getElementById("txtCantidad").value,
                estado: document.getElementById("cboEstado").value
            });

            //console.log(objPaciente);

            //GUARDAMOS EN LOCAL STORAGE
            // AGREGA EL OBJETO A LA VARIABLA TABLAPACIENTE
            if (IdRegistro > 0) {
                for (const i in RopaTable) {
                    var varPaciente = JSON.parse(RopaTable[i]);
                    if (varPaciente.IdRopa ==IdRegistro) {
                        RopaTable[i] = objRopa;
                        break;
                    }
                }
            } else {
                RopaTable.push(objRopa);
            }
            localStorage.setItem("tablaPacienteStorage", JSON.stringify(RopaTable));


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
        for (const i in RopaTable) {
            var varPaciente = JSON.parse(RopaTable[i]);
            if (varPaciente.IdRopa == IdRegistro) {
                document.getElementById("txtIdRopa").value = varPaciente.IdRopa;
                document.getElementById("txtCodigoP").value = varPaciente.Codigo;
                document.getElementById("txtModelo").value = varPaciente.nomProducto;
                document.getElementById("txtTipoRopa").value = varPaciente.tipoRopa;
                document.getElementById("txtCantidad").value = varPaciente.Cantidad;
                document.getElementById("cboEstado").value = varPaciente.estado;
                break;
            }
        }
    }
}