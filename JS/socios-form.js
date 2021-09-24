var tablaSocios = localStorage.getItem("tablaSociosStorage"); // CREA VARIABLE
tablaSocios = JSON.parse(tablaSocios);                        // TRANSFORMA A UNA VARIABLE JAVASCRIPT
if (tablaSocios == null) {
    tablaSocios = [];
}

var idForm = localStorage.getItem("idForm"); // localStorage almacena la información de forma indefinida
idForm = JSON.parse(idForm); // JSON para almacenar e intercambiar información de texto

if (idForm == null) {
    idForm = 0;
}

cargarPagina();

function guardar() {
    Swal.fire({   // swal, es para guardar alertas personalesisadas
        title: 'GUARDAR',
        html: ' DESEA GUARDAR CAMBIOS?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
    }).then((result) => {    /* Read more about isConfirmed, isDenied below */
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            var objGame = JSON.stringify({ //stringify, convierte un valor de Js en una cadena de texto
                idJuego: (idForm > 0) ? idForm : (tablaSocios.length + 1),  // mayor a cero significa que vamos a editar
                nombre_juego: document.getElementById("txtnombre").value,
                nombre_titular: document.getElementById("txtapellido").value,
                empresa: document.getElementById("txtDNI").value,
                telefono: document.getElementById("txtdireccion").value
            });

            //console.log(objPaciente);

            //GUARDAMOS EN LOCAL STORAGE
            // AGREGA EL OBJETO A LA VARIABLA TABLAPACIENTE
            if (idForm > 0) {
                for (const i in tablaSocios) {
                    var varGame = JSON.parse(tablaSocios[i]);
                    if (varGame.idJuego == idForm) {
                        tablaSocios[i] = objGame;
                        break;
                    }
                }
            } else { //para indicar instrucciones a realizar en caso de no cumplirse la condición
                tablaSocios.push(objGame);
            }
            localStorage.setItem("tablaSociosStorage", JSON.stringify(tablaSocios)); //setItem, Guardamos la informacion 


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
        for (const i in tablaSocios) {
            var varGame = JSON.parse(tablaSocios[i]);
            if (varGame.idJuego == idForm) {
                document.getElementById("txtIdJuego").value = varGame.idJuego;
                document.getElementById("txtNombreJ").value = varGame.nombre_juego;
                document.getElementById("txtNombTi").value = varGame.nombre_titular;
                document.getElementById("txtEmpresa").value = varGame.empresa;
                document.getElementById("txtTelefono").value = varGame.telefono;
                document.getElementById("cboEstado").value = varGame.estado;
                break; //break,es detener la ejecución de un bucle y salirse de él.
            
            } 
        }
    }
}
