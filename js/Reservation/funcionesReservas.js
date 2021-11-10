function validaesVacio(dato) {
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar() {
    //obtiene valores
    
    let id = $("#id").val();
    let Reservation = $("#Reservation").val();
    let errores = "";
    $("#mensajes").html("");


    //valida que los campos no sean vacios
    if (validaesVacio(startDate)) {
        errores = "Debe seleccionar la Reservation de inicio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#id").focus();
        return false;
    }else if (validaesVacio(devolutionDate)) {
        errores = "Debe seleccionar la fecha final<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#Reservation").focus();
        return false;
    } else {
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

/**
 * Al actualizar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validarEditar() {
    //obtiene valores
    let id = $("#idEdit").val();
    let Reservation = $("#ReservationEdit").val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(Reservation)) {
        errores = "Reservation vacia<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#ReservationEdit").focus();
        return false;
    } else {
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function upperCaseF(campo) {
    setTimeout(function () {
        campo.value = campo.value.toUpperCase();
    }, 1);
}