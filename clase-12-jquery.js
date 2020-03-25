/// <reference types="jquery"/>


//en js moderno para traer un h1 --> const $header = document.querySelector('h1');
//en js antiguo --> var $header = document.getElementByTagName('h1')[0];
//en jquery:
/*const $header = $("h1");
$header.text("Clase 12");
console.log($header.text());//si lo paso sin parametro me devuelve un valor y si le mando un parámetro, setea ese valor

//en js yo podia hacer: const $elementos = document.querySelectorAll('#lista li'); que me devuelve un nodelist
const $elementos = $("#lista li"); 

//console.table
console.table({header: $header.length, elementos:$elementos.length});

//cosas buenas de Jquery. Supongamos que agarro la lista de li (mis elementos)
//en js hago document.querySelectorAll('#lista li'); supongamos que quiero que me aparezca un alert cada vez que se clickea en cada uno de ellos... Tengo q hacer:
//para hacer eso tengo que hacer...
//document.querySelectorAll('#lista li').forEach((li)=>li.onclick = function(){console.log('click');} )

//en cambio  en jquery... lo hago de esta forma:

$elementos.click(()=>{
    console.log('click');//no me hace falta hacer el foreach
});

$elementos.click();//hacele click a tales elementos. 
*/
//Arrows functions no tienen this propio (contexto):

/*$elementos.click(()=>{
    console.log(this); //window
});

//esta si tiene this propio

$elementos.click(function(){
    console.log(this);//li
});*/

//Atención si yo agarro un elemento y lo envuelvo con el signo $ lo convierto en objeto jquery. 
//Por ej: 
/*$elementos.click(function(){
    console.log(this);//li
    console.log($(this)); //jquery <li>
    console.log($(this)[0]); //li
    console.log($(this).text());//convierte el HTMLElement(this) a un jquery<HtmlElement>
});
*/
//Esto nos sirve un montón para usar por ej los métodos de jquery por ej .text

/*$elementos.click(function(){
    console.log($(this).text());//me va a devolver el texto del elemento clickeado.
    //lo de arriba  es equivalemte a:
    console.log(this.textContent);//viene directo de html mientras que el de arriba viene de jquery. 
});

//si quiero afectar solo al tercer elemento...
$elementos[3].click();//esto es un elemento html
//en el caso de que quiera hacer uso de la magia de jquery... hay que envolverlo
$($elementos[3]).click();

// Jquery tiene concatenación... Chaining, concatenación. 
$elementos
    .addClass('rojo')
    .addClass('grande')
    .css({fontWeight: 'bold'});

//se logra porque el método addClass, y el método css (y casi todos los metodos de Jquery) devuelven
//ejemplo de implementación de chaining:
//tengo un objeto que tiene dos funciones una es decirHola y la otra es decirChau
//para que exista el concepto de chaining lo que tiene que pasar es que después de lo que tenga que pasar es decir despues de decir hola, chau
//tienen que devolverse a si mismos

const miObjeto = {
    decirHola(){
        console.log('hola');
        return this;//this en este caso es mi objeto
    },
    decirChau(){
        console.log('chau');
        return this;
    }
};

miObjeto
    .decirHola()
    .decirChau()
    .decirHola();

//cuando hago esto de arriba miObjeto.decirHola() mi interprete ejecuta el console.log(hola)y me devuelve el objeto de manera que
// le puedo decir que siga haciendo cosas
//es decir que cada función devuelve el mismo objeto de manera tal que se puede ir concatenando.

//PROMESAS. ¿Qué es?
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise

//Promesa: definición--> es que yo te estoy asegurando que algo va a pasar en el futuro
//vamos a ver promesas porque lo usa cypress y porque es útil para el concepto de API
//una promesa tiene dos estados: pendiente o terminada.
//Pendiente es no sé el resultado, no sé si me han cumplido esa promesa.
//una promesa pendiente tiene dos estados futuros, es decir pueden pasar dos cosas
//puede que se cumpla o puede ser que no se cumpla esa promesa

//en programación se usan promesas porque hay operaciones que tardan mucho tiempo por ej ir a buscar datos a un sitio web externos y no podemos bloquear
//al usuario mientras se espera la respuesta del sitio web
//entonces mientras se espera la respuesta se siguen haciendo/siguen pasando cosas.
//y después se avisa que pasó. 

//como se usa una promesa en la vida real: 
//api publica que da el cambio de moneda al dia de hoy. 
//https://api.exchangeratesapi.io/latest
//me da el cambio de cada moneda respecto al euro. (estos sonn datos que vamos a buscar a un sitio web)
//al ser datos que vamos a buscar de un sitio web, para buscar esos datos vamos a hacer un request, ese request puede fallar o tardar en responder
//Si operamos de un modo sincrono, es decir... que si se quieren los datos hay que esperar y no se use la página hasta no tener una respuesta
//para que no pase eso usamos fecth que devuelve una promesa 
fetch("https://api.exchangeratesapi.io/latest")//esta promesa es un objeto que tiene un método then
.then(respuesta => respuesta.json())//el métdo then significa hace esto y una vez que lo hagas ejecuta esta funcion, el then lo que tiene es que también se
// puede concatenar(concepto de chaining se puede aplicar acá)
//lo siguiente es equivalente a lo de arriba:
//.then(function(respuesta){return respuesta.json();});
.then(respuesta =>{//esta respuesta es el resultado de respuesta.json(). then siempre toma un parámetro, ese parámetro está definido por la función anterior
    //$("#resultado").text($('#resultado').text() + JSON.stringify(respuesta));
    console.log('el sitio web contesto');
})
.catch(error => console.error("falló", error));//el .catch es para decir... si no pudiste resolver que me myestre un error. 

console.log("esto pasa antes que la respuesta de fetch");
*/
//esto es importante... antes para hacer lo mismo que hoy en dia logramos hacer con un fetch era larguísimo de hacer, entonces jquery envolvió todo con ajax 
//que significa asynchronous jvascript and XML, 
//antes para transferir datos se usaba XML
//JSON:
//{nombre: "Adriana", apellido: Gonzalez}
//XML:
//<persona><nombre>Adriana</nombre><apellido>Gonzalez</apellido></persona>
//ajax es estar en la página web y mientras estoy en la página web hacer un request a un servidor y traer datos, los datos no solo pueden estar en xml tambien
// pueden estar en json

//en ajax se haría así: 
/* ESTO ES AJAX HOY EN DIA SE USA MÁS FETCH

$.ajax({
    method: "GET",
    url: "https://api.exchangeratesapi.io/latest",
    //success: function (respuesta){}
    success: respuesta => { //puedo consultar la documentacion jquery ajax. success es una función que va a ser llamada si el request es exitoso, lleva tres argumentos...
        console.log("respuesta de exchangeratespi.io", respuesta);
        $("#resultado").text(JSON.stringify(respuesta));
    },
    async: true
    //async: false //al descomentar esta linea nada se ejecuta hasta que esta llamada termine.
    //significa que no quiero que sea asíncrono. 
    //es decir que si async es true... lo que va a suceder es que
    // la página va a seguir funcionando mientras espera
    //que se carguen los datos que viene del otro sitio web
});
//asíncrono significa que no va uno después del otro...
console.log("esto pasa antes de la respuesta de $.ajax");
*/

/* CON FETCH: 
fetch("https://api.exchangeratesapi.io/latest")//esta promesa es un objeto que tiene un método then
.then(respuesta => respuesta.json())//el .json es para convertirlo a ese formato.
//el métdo then significa hace esto y una vez que lo hagas ejecuta esta funcion, el then lo que tiene es que también se
// puede concatenar(concepto de chaining se puede aplicar acá)
//lo siguiente es equivalente a lo de arriba:
//.then(function(respuesta){return respuesta.json();});
.then(respuesta =>{//esta respuesta es el resultado de respuesta.json(). then siempre toma un parámetro, ese parámetro está definido por la función anterior
    //$("#resultado").text($('#resultado').text() + JSON.stringify(respuesta));
    console.log('el sitio web contesto');
})
.catch(error => console.error("falló", error));//el .catch es para decir... si no pudiste resolver que me myestre un error. 

console.log("esto pasa antes que la respuesta de fetch");
*/

//ENTONCES, resumiendo sería así:
/*fetch('https://api.exchangeratesapi.io/latest')
.then(respuesta => respuesta.json())
.then(respuestaJSON =>{
    //console.log('la respuesta es: ' , respuestaJSON);//objeto con propiedades.
    //$('resultado').text($('resultado')).text() + JSON.stringify(respuestaJSON)
    //console.log(respuestaJSON.base);me da euro
    $('h1').text(`cambios del dia ${respuestaJSON.date} en base ${respuestaJSON.base}`);
    $('ul').html('');//borro la ul, porque tenia '1 2 3 4 5'
    Object.keys(respuestaJSON.rates).forEach(moneda=>{//si me fijo en la documentacion... respuesta.rates es un objeto que tiene las monedas y valor
        $('ul').append($(`<li>${moneda}: ${respuestaJSON.rates[moneda]}</li>`))//append es como el appendchild en js para agregar elementos-
    });
});*/

//ahora estabamos usando promesas, es decir fetch nos daba una promesa y
//yo la usaba pero ahora voy a ver la creación de promesas:
//EJEMPLO DE IMPLEMENTACIÓN/CREACIÓN DE PROMESAS: (RARA VEZ LO USARÉ PERO ESTÁ BUENO SABERLO)

//imaginemos que tenemos la función verificarMayorEdad que lo que hace
//es ir a fijarse al padrón electoral a un sitio web y va a tardar muchísimo. 
//queremos que mientras el usuario espera pueda usar la página y no quedar
//bloqueado, entonces le vamos a devolver una promesa en donde le digo
//que le voy a contestar.

/*
const verificarMayorEdad = function(edadUsuario){
    return new Promise(function(resolve, reject){//estoy devolviendo una promesa que toma como primer parámetro una función y esa función a su vez toma dos parámetros y cada uno de esos parámetros(resolve y reject) es una función, un eventhandler 
        //explicado de otra forma:
        //la función verificarMayorEdad devuelve un objeto de tipo promesa
        //la promesa toma una función para ver como se resuelve la promesa si la pude cumplir
        //o rechazar la promesa si no la pude cumplir. 
        //resolve y reject está en la documentación s
        console.log(' verificando en un proceso externo larguísimo... ');

        //hago la simulación de la espera: 
        setTimeout(function(){
            if(edadUsuario>=18){
                resolve('la edad era posta');
            }
            else{
                reject('la edad no era posta');
            }
        }, 5000);
    });
};

const edad = 8;
verificarMayorEdad(edad)
    .then(mensaje => console.log(mensaje))// acá le paso el resolve
    .catch(error => console.error(error));//acá le paso el reject
*/

// API --> (APLICATION PROGRAMMING INTERFACE ó interfaz de programación de aplicaciones)
// las web API SIRVEN para desacoplar el frontend (como algo se ve vs como algo opera) del backend.
//supongamos que tengo un archivo js con las funciones obtenerMayorNum
//obtenerMenorNum y obtenerPromedio. si yo desde otro archivo externo 
//uso esas funciones sin importar como estan construidad,
// entonces ese archivo donde están las funciones
//es un buen ejemplo de APIS
//las API's sirven para esp,para ocultar detalles de implementación
//y ocultar detalles de implementación reducen complejidad

//construir interface que pida fecha, base y cambios. y muestre eso. 
//Teoría de WEBS API's:
//Todo en la web es HTTP (TRANSFERENCIAS HTTP). hay metodos: get, post, path... etc.
//por lo general cuando voy a una web lo que pasa es get...
//get es para traer
//post enviar
//cargar el index es un request de http
//para cargar el main.css es otro request de http
//para cargar jquery otro request
//en esta página por ej estamos haciendo un request (api.exchange).

//con ajax me permite hacer un request http y reemplazar sólo lo que haya 
//que reemplazar sin refrescar la página
//es decir, por ej quiero modificar sólo el main
//y dejar el header y footer como está- 

//Las webs apis es a través de http que devuelven datos (en json en xml o cualquier otra cosa)
//Estructurar las API, hay dos modelos rest y rpc, el mas usados es rest (restful api)
//qué es rest?--> es un estilo de arquitectura, es una forma de organizar
//las web api's para que tengan sentido
//estructura de una restful api... 
//tiene una base ej: pokeapi.co/api y después va la versión
//porque los creadores de api(eso lo hacen los backends) no saben cómo la usan
//el problema es que si cambio la estructura de mi respuesta
//puedo romper un montón de aplicaciones
//al hacer cambios que pueden arruinar todo (breaking changes)
//lo que corresponde hacer es cambiar la versión
//entonces los que no quieren actualizar usan la version vieja
//y sino usaran la nnueva. 
//todo en las api esta alrededor de recursos. 
//pokeapi.co/api/v2/pokemon --> pokemon es un recurso, me devuelve un listado con lso pokemones

//tareas:
/*
- consultar https://exchangeratesapi.io/
-Crear una interfaz que permita en base a la fecha y la base, mostrar los cambios disponibles.
-testear con cypress


La otra tarea es construir un pokedex 
- consultar documentación https://pokeapi.co/
- listar pokemones y poder cambiar de pág
- ver detalles de 1 pokemon incluyendo al menos una foto.
*/