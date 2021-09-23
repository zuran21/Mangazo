var tablaGame = localStorage.getItem("tablaGameStorage"); // CREA VARIABLE
tablaGame = JSON.parse(tablaGame);                        // TRANSFORMA A UNA VARIABLE JAVASCRIPT
if (tablaGame == null) {
    tablaGame = [];
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
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            var objGame = JSON.stringify({
                idJuego: (idForm > 0) ? idForm : (tablaGame.length + 1),
                nombre_juego: document.getElementById("txtnombre").value,
                nombre_titular: document.getElementById("txtapellido").value,
                empresa: document.getElementById("txtDNI").value,
                telefono: document.getElementById("txtdireccion").value
            });

            //console.log(objPaciente);

            //GUARDAMOS EN LOCAL STORAGE
            // AGREGA EL OBJETO A LA VARIABLA TABLAPACIENTE
            if (idForm > 0) {
                for (const i in tablaGame) {
                    var varGame = JSON.parse(tablaGame[i]);
                    if (varGame.idJuego == idForm) {
                        tablaGame[i] = objGame;
                        break;
                    }
                }
            } else {
                tablaGame.push(objGame);
            }
            localStorage.setItem("tablaGameStorage", JSON.stringify(tablaGame));


            Swal.fire('Se guardaron los datos !', '', 'success').then((result) => {
                window.location.replace("socios.html"); // REDIRECCIONA A LA PAGINA socios.html
            })
        } else if (result.isDenied) {
            Swal.fire('Cambios no Guardados', '', 'info')
        }
    });

}

function cargarPagina() {
    if (idForm > 0) {
        for (const i in tablaGame) {
            var varGame = JSON.parse(tablaGame[i]);
            if (varGame.idJuego == idForm) {
                document.getElementById("txtIdsocio").value = varGame.idJuego;
                document.getElementById("txtnombre").value = varGame.nombre_juego;
                document.getElementById("txtapellido").value = varGame.nombre_titular;
                document.getElementById("txtdireccion").value = varGame.empresa;
                document.getElementById("txtDNI").value = varGame.telefono;
                document.getElementById("cboEstado").value = varGame.estado;
                break;
            }
        }
    }
}
