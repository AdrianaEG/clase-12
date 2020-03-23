/// <reference types="jquery"/>
//en js moderno para traer un h1 --> const $header = document.querySelector('h1');
//en js antiguo --> var $header = document.getElementByTagName('h1')[0];
//en jquery:
const $header = $("h1");
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

$elementos.click(function(){
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