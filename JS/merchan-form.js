var tablaMerchan = localStorage.getItem("tablaMerchanStorage"); // CREA VARIABLE
tablaMerchan = JSON.parse(tablaMerchan); // TRANSFORMA A UNA VARIABLE JAVASCRIPT
if (tablaMerchan == null) { 
    tablaMerchan = [];  //Es para cuando este vacio, no se ponga nada.
}
                                            // getItem, devuelve el valor de la clave cuyo nombre se le pasa por parámetro.
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
        confirmButtonText: 'SI', // saldran un mensaje SE GUARDARON LOS DATOS
        denyButtonText: `NO`,// saldra un mensaje CAMBIOS NO GUARDADOS
    }).then((result) => { 
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) { 
            var objMerchan = JSON.stringify({ //stringify, convierte un valor de Js en una cadena de texto
                Iddelproducto: (idForm > 0) ? idForm : (tablaMerchan.length + 1),
                nombredelproducto: document.getElementById("txtNOMBREDELPRODUCTO").value,
                modelo: document.getElementById("txtMODELO").value, //getElementById, devuelve el elemento que tiene el atributo ID con el valor especificad
                precio: document.getElementById("txtPRECIO").value,
                descuento: document.getElementById("cboDESCUENTO").value, 
                stock: document.getElementById("cboSTOCK").value
                
            });

            //console.log(objMerchan);

            //GUARDAMOS EN LOCAL STORAGE
            // AGREGA EL OBJETO A LA VARIABLE tablaMerch    an
            if (idForm > 0) { // Si es 0 es por que estamos agregando un nuevo registro
                for (const i in tablaMerchan) { //for,  es una sentencia que implementa un bucle
                    var varMerchan = (tablaMerchan[i]);//JSON.parse, analiza una cadena de texto
                    if (varMerchan.Iddelproducto == idForm) {// if, es una estructura de control utilizada para tomar decisiones
                        tablaMerchan[i] = objMerchan;
                        break;
                    }
                }
            } else { //para indicar instrucciones a realizar en caso de no cumplirse la condición.
                tablaMerchan.push(objMerchan);
            }
            localStorage.setItem("tablaMerchanStorage", JSON.stringify(tablaMerchan)); //setItem, este es el método para almacenar información en nuestro localStorage. 
            Swal.fire('Se guardaron los datos !', '', 'success').then((result) => {
                window.location.replace("merchan-lista.html"); // REDIRECCIONA A LA PAGINA merchan-lista
            })
        } else if (result.isDenied) {
            Swal.fire('Cambios no Guardados', '', 'info')// swal, es para guardar alertas personalisadas
        }
    });

}

function cargarPagina() {
    if (idForm > 0) {
        for (const i in tablaMerchan) {
            var varMerchan = JSON.parse(tablaMerchan[i]);
            if (varMerchan.Iddelproducto == idForm) {
                document.getElementById("txtIDDELPRODUCTO").value = varMerchan.Iddelproducto;
                document.getElementById("txtNOMBREDELPRODUCTO").value = varMerchan.nombredelproducto;
                document.getElementById("txtMODELO").value = varMerchan.modelo;
                document.getElementById("txtPRECIO").value = varMerchan.precio;
                document.getElementById("cboDESCUENTO").value = varMerchan.descuento;
                document.getElementById("cboSTOCK").value = varMerchan.stock;
                break; //break,es detener la ejecución de un bucle y salirse de él.
            }
        }
    }
}