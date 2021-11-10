/**********************BEGINNING  CODE CLIENT*************************************/
/**********************INICIO CODIGO CLIENTE*********************************/

//$(document).ready(function () {
//carga la librería javascript de jquery cuando se carga la página cabañas.html por completo
//cuando carga la página html se ejecuta la función: listar()
$(document).ready(function () {
    //configura el aspecto inicial de la pagina
    estadoInicial();
    //ejecuta función para enviar petición al ws
    listar();
});

//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo GET
function listar() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "https://ge87fc5530be4b4-db202110011129.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/client/client",
        
        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        //data : { id : 1, ...},

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta.items);

            //recibe el arreglo 'items' de la respuesta a la petición
            listarRespuesta(respuesta.items);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            //$("#mensajes").hide(1000);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de Clientes...");
            $("#mensajes").hide(1000);
        }
    });
}

/* 
    Esta función se encarga de recorrer el listado de datos 'items' recibido como parametro,
    construir una tabla html en la variable javascript 'tabla',
    acceder al elemento elemento identificado con el id 'listado'
    y modificar su html agregando el contenido de la variable 'tabla'.
    
*/
function listarRespuesta(items) {
    $("#listado").html("");
    $("#listado").show(500);
    //define variable javascript con la definicion inicial de la tabla, la primera fila y los
    //encabezados o títulos de la tabla
    var tabla = `<table class="container">
	<thead>
                  <tr>
                  <th><span class="yellow">ID</th>
                    <th><span class="yellow">NOMBRE</span></th>
                    <th><span class="yellow">EMAIL</span></th>
                    <th><span class="yellow">EDAD</span></th>
                    <th colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="yellow">Acciones</span></th>
                  </tr>`;
                  
    //recorre el arreglo de 'items' y construye dinamicamente la fila de datos de la tabla
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                    <td><span class="yellow">${items[i].id}</span></td>
                    <td><span class="yellow">${items[i].name}</span></td>
                   <td><span class="yellow">${items[i].email}</span></td>
                   <td><span class="yellow">${items[i].age}</span></td>
                   <td><div id="neon-btn"><button onclick="editarRegistro(${items[i].id})" class="btn one">Editar</button></div></td>
                   <td><button onclick="borrarRegistro(${items[i].id})" class="btn three">Borrar</button></td>
                   </tr>`;
    }

    //cierra tabla agregando el tag adecuado
    tabla +=`</tbody>
    </table>`;

    //accede al elemento con id 'listado' y adiciona la tabla de datos a su html
    $("#listado").html(tabla);
}


function estadoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500)

    //limpia el contenido de los campos del formulario nuevo
    $("#id").val(""),
    $("#email").val(""),
    $("#age").val(""),
    $("#name").val("")
}

/**********************END  CODE CLIENT*************************************/
/**********************FINAL CODIGO CLIENTE*********************************/
