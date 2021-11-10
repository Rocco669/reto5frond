/**********************START CUSTOMER CODE********************************/
/**********************INICIO CODIGO CLIENTE*******************************/

function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    //obtiene valores
    let id = $("#id").val();
    let name = $("#name").val();
    let email = $("#email").val();
    let age = $("#age").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#id").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(email)) {
        errores="email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#email").focus();
        return false;
    }else if( validaesVacio(age)) {  
        errores="age vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#age").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

}

/**
 * Al actualizar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
 function validarEditar(){
    //obtiene valores
    let id = $("#idEdit").val();
    let name = $("#nameEdit").val();
    let email = $("#emailEdit").val();
    let age = $("#ageEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(email)) {
        errores="email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#emailEdit").focus();
        return false;
    }else if( validaesVacio(age)) {  
        errores="age vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#ageEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

}
/**********************FINAL CUSTOMER CODE*************************************/
/**********************FINAL CODIGO CLIENTE***********************************/


/**********************START Cabin CODE**************************************/
/**********************INICIO CODIGO CABAÑA*********************************/

/**********************FINAL Cabin CODE************************************/
/**********************FINAL CODIGO CABAÑA********************************/


/*********************BEGINNING CODE MESSAGE******************************/
/**********************START CODE MESSAGE********************************/

/*********************END OF MESSAGE CODE********************************/
/**********************FINAL CODIGO MENSAJE*****************************/