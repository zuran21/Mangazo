var tablapatrocinadores = localStorage.getItem("tablapatrocinadoresStorage"); // CREA VARIABLE
tablapatrocinadores = JSON.parse(tablapatrocinadores); // TRANSFORMA A UNA VARIABLE JAVASCRIPT
if (tablapatrocinadores == null) { // null para que no quede vacio
    tablapatrocinadores = [];
}

var idForm = localStorage.getItem("idForm"); //localStorage almacena la información de forma indefinida
idForm = JSON.parse(idForm); // JSON para almacenar e intercambiar información de texto
if (idForm == null) {
    idForm = 0;
}

cargarPagina();

function guardar() {
    Swal.fire({ // swal, es para guardar alertas personalisadas
        title: 'GUARDAR',
        html: ' DESEA GUARDAR CAMBIOS?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
    }).then((result) => { 
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) { 
            var objpatrocinadores = JSON.stringify({ //stringify, convierte un valor de Js en una cadena de texto
                Idempresa: (idForm > 0) ? idForm : (tablapatrocinadores.length + 1),
                nombredelaempresa: document.getElementById("txtNOMBREDELAEMPRESA").value,
                representante: document.getElementById("txtREPRESENTANTE").value,
                tiempodecontrato: document.getElementById("txtTIEMPODECONTRATO").value,
                montoporpatrocinio: document.getElementById("txtMONTOPORPATROCINIO").value
                
            });

            //console.log(objPatrocinadores);

            //GUARDAMOS EN LOCAL STORAGE
            // AGREGA EL OBJETO A LA VARIABLE tablaPatrocinadores
            if (idForm > 0) {
                for (const i in tablapatrocinadores) {
                    var varpatrocinadores = JSON.parse(tablapatrocinadores[i]);
                    if (varpatrocinadores.idempresa == idForm) {
                        tablapatrocinadores[i] = objpatrocinadores;
                        break;
                    }
                }
            } else { //para indicar instrucciones a realizar en caso de no cumplirse la condición.
                tablapatrocinadores.push(objpatrocinadores);
            }
            localStorage.setItem("tablapatrocinadoresStorage", JSON.stringify(tablapatrocinadores)); //setItem, este es el método para almacenar información en nuestro localStorage. 
            Swal.fire('Se guardaron los datos !', '', 'success').then((result) => {
                window.location.replace("patrocinadores.html"); // REDIRECCIONA A LA PAGINA PATROCINADORES
            })
        } else if (result.isDenied) {
            Swal.fire('Cambios no Guardados', '', 'info')
        }
    });

}

function cargarPagina() {
    if (idForm > 0) {
        for (const i in tablapatrocinadores) {
            var varpatrocinadores = JSON.parse(tablapatrocinadores[i]);
            if (varpatrocinadores.idempresa == idForm) {
                document.getElementById("txtIDEMPRESA").value = varpatrocinadores.Idempresa;
                document.getElementById("txtNOMBREDELAEMPRESA").value = varpatrocinadores.nombredelaempresa;
                document.getElementById("txtREPRESENTANTE").value = varpatrocinadores.representante;
                document.getElementById("txtTIEMPODECONTRATO").value = varpatrocinadores.tiempodecontrato;
                document.getElementById("txtMONTOPORPATROCINIO").value = varpatrocinadores.montoporpatrocinio;
                break; //break,es detener la ejecución de un bucle y salirse de él.
            }
        }
    }
}