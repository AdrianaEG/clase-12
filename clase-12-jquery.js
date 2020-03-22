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

//cuando hago esto de arriba miObjeto.decirHola() mi interprete ejecuta el console.log(hola)y me devuelve el objeto de manera que le puedo decir que siga haciendo cosas
//es decir que cada función devuelve el mismo objeto de manera tal que se puede ir concatenando.

//PROMESAS. ¿Qué es?
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise

//Promesa: definición--> es que yo te estoy asegurando que algo va a pasar en el futuro




