

const miSuma = document.querySelector('#suma');
miSuma.onclick = function(){
    const result = document.querySelector('#resultado')
    result.textContent = suma();
}

function suma(){
    let n1 = Number(document.querySelector('#num1').value);
    let n2 = Number(document.querySelector('#num2').value);
    if ( !isNaN(n1) && !isNaN(n2) ){
        return n1 + n2;
    }
    else{  
        return 'NO SON NUMÉRICOS';
    }
}

const miResta = document.querySelector('#resta');
miResta.onclick = function(){
    const result = document.querySelector('#resultado');
    result.textContent = resta();
}

function resta(){
    let n1 = Number(document.querySelector('#num1').value);
    let n2 = Number(document.querySelector('#num2').value);
    if (!isNaN(n1) && (!isNaN(n2))){
        return n1 - n2;
    }
    else{
        return 'NO SON NUMÉRICOS'
    }


}

const miMultiplicacion = document.querySelector('#multiplicacion');
miMultiplicacion.onclick = function(){
    const result = document.querySelector('#resultado');
    result.textContent = multiplicacion();
}

function multiplicacion(){
    let n1 = Number(document.querySelector('#num1').value);
    let n2 = Number(document.querySelector('#num2').value);

    if (!isNaN(n1) && !isNaN(n2)){
        return n1 * n2;
    }
    else{
        return 'NO SON NUMÉRICOS'
    }
}

const miDivision = document.querySelector('#division');
miDivision.onclick = function(){
    const result = document.querySelector('#resultado');
    result.textContent = division();
}

function division(){
    let n1 = Number(document.querySelector('#num1').value);
    let n2 = Number(document.querySelector('#num2').value);
    if ((n1 == 0) || (n2 == 0)){
        return 'NO SE PUEDE DIVIDIR POR 0'
    }
    else if (!isNaN(n1) && !isNaN(n2)){
        return n1 / n2;
    }
    
    else{
        return 'NO SON NUMÉRICOS'
    }
}

