$(function(){

    $('#form_nombre_trabajo_etc').submit(function(event){
        // if($('#nombre').val().length == 0){
        //     event.preventDefault();
        //     alert('El campo nombre es obligatorio');
        // }

        let error = false;

        $('.controlar_formulario').each(function(i){
            // console.log('i: '+i);
            if ($(this).val().length == 0){
                // no funca
                event.preventDefault();
            }
            
        })
        // falta corregir
        // tengo que cambiar algo de los checkboxes porque sino nunca me va a submitiar

    })


    $('#nombre').focusin(function(){
        console.log('focus in')
    })


    $('#nombre').focusout(function(){
        console.log('focus out')
        if($('#nombre').val().length == 0){
            $('#nombre').addClass('error');
            $('#nombre').removeClass('valid');
            // AGREGAR LA IMAGEN
        }
        else{
            $('#nombre').addClass('valid');
            $('#nombre').removeClass('error');
            // AGREGAR LA IMAGEN
        }
        if($('#nombre').val().length > 12){
            $('#nombre').addClass('error');
            $('#nombre').removeClass('valid');
            // AGREGAR LA IMAGEN
        }

    })

    $('#trabajo').focusout(function(){
        if ($('#trabajo').val().length == 0){
            $('#trabajo').addClass('error');
            $('#trabajo').removeClass('valid');
        }
        else{
            $('#trabajo').addClass('valid');
            $('#trabajo').removeClass('error');
        }

        if (($('#trabajo').val().length < 10) || ($('#trabajo').val().length > 30)){
            $('#trabajo').addClass('error');
            $('#trabajo').removeClass('valid');
        }

    })

    var paises = ['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'Guyana',' Guyana Francesa', 'Paraguay', 'Perú', 'Surinam', 'Uruguay', 'Venezuela'];
    $('#pais').focusout(function(){
        let contadorxd = 0;
        if ($('#pais').val().length == 0){
            $('#pais').addClass('error');
            $('#pais').removeClass('valid');
        }
        else{
            for (var i = 0; i < paises.length; i++){
                if (paises[i] == $('#pais').val()){
                    $('#pais').addClass('valid');
                    $('#pais').removeClass('error');
                    contadorxd++;
                }
            }
            if (contadorxd != 1){
                $('#pais').addClass('error');
                $('#pais').removeClass('valid'); 
            }
            //$('#pais').addClass('valid');
            //$('#pais').removeClass('error');
        }
    })

    $('#ciudad').focusout(function(){
        if ($('#ciudad').val() == 'seleccionar'){
            $('#ciudad').addClass('error');
            $('#ciudad').removeClass('valid');
        }
        else{
            $('#ciudad').addClass('valid');
            $('#ciudad').removeClass('error');
        }
    })

    // $('.form-check-input').focusout(function(){
    //     let hasError = false;
    //     if (!document.querySelector('input[name="flexRadioDefault"]:checked')){
    //         alert('Error, rellena el campo horario');
    //         hasError = True;
    //     }
    //     // var conta2r = 0;
    //     // var isChecked = document.getElementById('#radio1').checked;
    //     // var isChecked2 = document.getElementById('#radio2').checked;
    //     // if(isChecked){
    //     //     conta2r++;
    //     //     alert('checkbox esta seleccionado');
    //     //     // CAMBIAR ESTO CUANDO VERIFIQUE EL FORMULARIO GENERAL
    //     // }
    // })

    
});
