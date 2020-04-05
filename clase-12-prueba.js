//EJEMPLO DE CÓMO FUNCIONAN LAS FUNCIONES ASÍNCRONAS:

//console.log(' 1. Proceso iniciado...');

//setTimeout(()=>{
//    x = x*3+2;
//    console.log('2. proceso terminado...');
//}, 2000); // se comporta como función asíncrona. 

//console.log('3. el resultado es: ' + x);*/
//en este ejemplo vamos a ver que primero me aparece 1. luego 3 y al último 2
//para que esto no suceda podemos usar promesas...

/* EJEMPLO 1 DE APLICACIÓN DE PROMESAS:
let x = 10;
const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        x = x*3+2;
        console.log('2. proceso terminado...');
        resolve(x);
    }, 2000); // se comporta como función asíncrona. 
});
console.log(' 1. Proceso iniciado...');
promesa.then(res=>{
    console.log('3. El resultado es ' + res);
});*/

/*OTRO EJEMPLO DE APLICACIÓN DE PROMESAS*/
//Tengo dos objetos uno es usuarios con id y nombre, el otro es teléfono con su id y número de teléfono.  
let usuarios = [{
    id: 1,
    nombre: 'Juana'
},
{
    id: 2, 
    nombre: 'Isabela'
}];

let telefonos = [{
    id:1,
    telefono: 266426268
},
{
    id: 2,
    telefono: 3513536985
}];

//añadir una promesa a esta función: (lo devuelvo)
/*const obtenerUsuario = id=>{
    return new Promise((resolve, reject)=>{
        if(usuarios.find(usuario=>usuario.id=== id)){//.find es como decir busca este usuario... 
            resolve('EL usuario existe');
        }else{
            reject('EL usuario no existe');
        }
    });
};

const obtenerTelefono = id=>{
    return new Promise((resolve, reject)=>{
        if(telefonos.find(telefono=>telefono.id=== id)){
            resolve('EL telefono existe');
        }else{
            reject('EL telefono no existe');
        }
    });
};

//como las mando a lllamar a esas funciones....
obtenerUsuario(3)
.then(res=>{
    console.log(res);
})
.catch(error=>{
    console.log(error);
});*/

//tarea: quiero que obtenerUsuario se demore y que una vez que devuelva ese usuario se lo pase a ObtenerTelefono...

const obtenerUsuario = id=>{
    return new Promise((resolve, reject)=>{
        if(usuarios.find(usuario=>usuario.id=== id)){//.find es como decir busca este usuario... 
            console.log('EL usuario existe');
            resolve(obtenerTelefono(id));//acá en el resolve llamo a obtenerTelefono con el mismo id...
        }else{
            reject('EL usuario no existe');
        }
    });
};

const obtenerTelefono = id=>{
    return new Promise((resolve, reject)=>{
        if(telefonos.find(telefono=>telefono.id=== id)){
            resolve('EL telefono existe');
        }else{
            reject('EL telefono no existe');
        }
    });
};

//como las mando a lllamar a esas funciones....
obtenerUsuario(2)
.then(res=>{
    return res;
})
.then(mensaje=>{
    console.log(mensaje);
})
.catch(error=>{
    console.error(error);
});
