const $botonSiguiente = document.querySelector('#btn-siguiente');
const $botonCalcular = document.querySelector('#btn-calcular');
const $botonResetear = document.querySelector('#btn-resetear');

$botonSiguiente.onclick = function(e){
    e.preventDefault();
    let cantidadIntegrantes = Number(document.querySelector('.cantidad-integrantes').value);
    if(cantidadEsCorrecta(cantidadIntegrantes)){
        for(let i=0; i<cantidadIntegrantes; i++){
            crearCuadroEdad(i);
        }
        mostrarElemento($botonCalcular);
        ocultarElemento($botonSiguiente);
    }
    else{
        console.log('MOSTRAR ERROR');
    }
}

$botonCalcular.onclick = function(e){
    e.preventDefault();
    let edades = document.querySelectorAll('.edad-integrante');
    
    if(edadesSonCorrectas(edades)){
        let mayor = calcularMayor(edades);
        let menor = calcularMenor(edades);
        let promedio = calcularPromedio(edades);

        mostrarResultados(mayor, menor, promedio);
    }
    else{
        console.log('MOSTRAR ERROR');
    }
}

$botonResetear.onclick = function(e){
    e.preventDefault();
    document.querySelector('.cantidad-integrantes').value = '';
    mostrarElemento($botonSiguiente);
    document.querySelector('.contenedor-edad-integrantes').innerHTML = '';
    if($botonCalcular!==null){
        ocultarElemento($botonCalcular);
    }
    document.querySelector('.contenedor-resultados').innerHTML = '';
}

//FUNCIONES:
const crearCuadroEdad = (i) => {
    
    const $nuevoLabel = document.createElement('label');
    const texto = document.createTextNode(`Edad del integrante ${i+1} : `);
    $nuevoLabel.appendChild(texto);

    const $nuevoInput = document.createElement('input');
    $nuevoInput.type = "number";
    $nuevoInput.className = 'edad-integrante';

    const $espacio = document.createElement('br');

    document.querySelector('.contenedor-edad-integrantes').appendChild($nuevoLabel);
    document.querySelector('.contenedor-edad-integrantes').appendChild($nuevoInput);
    document.querySelector('.contenedor-edad-integrantes').appendChild($espacio);
}

const mostrarElemento = (elemento) =>{
    if(elemento.classList.contains('oculto')){
        elemento.classList.remove('oculto');
    }

    elemento.classList.add('mostrar');
}

const ocultarElemento = (elemento) => {
    if(elemento.classList.contains('mostrar')){
        elemento.classList.remove('mostrar');
    }
    elemento.classList.add('oculto');
}

function cantidadEsCorrecta(cantidadIntegrantes){
    return (cantidadIntegrantes>0) && (cantidadIntegrantes%1 === 0) && (cantidadIntegrantes !== "");
}

function edadesSonCorrectas(edades){
    for(let i = 0; i<edades.length; i++){
        if((edades[i].value == '') || (edades[i].value <=0) ||(edades[i].value %1 !== 0)){
            return false;
            break;
        }  
    }
    return true;
}

function calcularPromedio(edades){
    let total = 0;
    for(let i=0; i<edades.length; i++){
        total += Number(edades[i].value);
    }
    total = (total/edades.length);
    return total;
}

function calcularMayor(edades){
    let mayor = 0;
    for(let i=0; i<edades.length; i++){
        if(Number(edades[i].value)>mayor){
            mayor = Number(edades[i].value);
        }
    }
    console.log(mayor);
    return mayor;
}

function calcularMenor(edades){
    let menor = Number(edades[0].value);
    for(let i=0; i<edades.length; i++){
        if(Number(edades[i].value)<menor){
            menor = Number(edades[i].value);
        }
    }
    return menor;
}

function mostrarResultados(mayor, menor, promedio){
    const parrafoMayor = document.createElement('p');
    let texto = document.createTextNode(`La edad mayor es: ${mayor}`);
    parrafoMayor.appendChild(texto);

    const parrafoMenor = document.createElement('p');
    texto = document.createTextNode(`La edad menor es: ${menor}`);
    parrafoMenor.appendChild(texto);

    const parrafoPromedio = document.createElement('p');
    texto = document.createTextNode(`El promedio de edades es: ${promedio}`);
    parrafoPromedio.appendChild(texto);

    document.querySelector('.contenedor-resultados').appendChild(parrafoMayor);
    document.querySelector('.contenedor-resultados').appendChild(parrafoMenor);
    document.querySelector('.contenedor-resultados').appendChild(parrafoPromedio);

}
