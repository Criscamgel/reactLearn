/* function actividad(nombre, actividad){
    console.log(`la persona ${nombre}, esta realizando la actividad ${actividad}`)
}

actividad('Juan', 'Aprender Javascript'); */

//-------------->

/* let viajando = (destino) => {
    return `viajando a la ciudad de ${destino}`;
}

let viaje;
viaje = viajando('Paris');

console.log(viaje) */

//-------------->


//objetos

// function mostrarInformacionTarea(tarea, prioridad){
//     return `la tarea ${tarea} tiene una prioridad de ${prioridad}`;
// }

/* objeto Literal */

// const persona = {
//     nombre: 'Juan',
//     profersion: 'Desarrollador Web'
// }

// console.log(persona)

//Object constructor

// function Tarea(nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }

//Crear una nueva tarea

// const tarea1 = new Tarea('aprender Javascript y react', 'urgente')
// console.log(tarea1);

/* Prototypes */

// function Tarea(nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }

//Agregar un prototype a la tarea

// Tarea.prototype.mostrarInformacionTarea = function(){
//     return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
// }

// const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
// console.log(tarea1);
// console.log(tarea1.mostrarInformacionTarea());

//Destructuring de objetos ----------------------------->

// const aprendiendoJS = {
//     version: {
//         nueva: 'ES6',
//         anterior: 'ES5'
//     },
//     frameworks: ['React', 'VueJs', 'AngualrJs']
// }

// // Destructuring es extraer valores de un objeto

// console.log(aprendiendoJS);

// Destructuring New
// let {anterior} = aprendiendoJS.version;
// console.log(anterior);

//Object Literal Enhacement ----------------------------->

// const banda = 'Grupo Niche';
// const genero = 'Salsa';
// const canciones = ['Gotas de lluvia', 'Como podre disimular', 'Reventamos']

// //No necesita crearlo de esa forma

// // const grupoNiche = {
// //     banda: banda,
// //     genero: genero,
// //     canciones: canciones
// // }

// //Forma Nueva

// const grupoNiche = {banda, genero, canciones};
// console.log(grupoNiche);

//Agregando funciones a objetos ----------------------------->

// const persona = {
//     nombre: 'Juan',
//     trabajo: 'Desarrollador web',
//     edad: 500,
//     musicaSalsa: true,
//     mostrarInformacion(){
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
//     }
// }

// persona.mostrarInformacion();

//Arreglos ForEach ----------------------------->

// const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// console.log(carrito);

// const appContenedor = document.querySelector('#app');

// let html = '';

// carrito.forEach(rader => {
//     html += `<li>${rader}</li>`
// })

// appContenedor.innerHTML = html;

//Arreglos .map ----------------------------->

// carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// const appContenedor = document.querySelector('#app');
// let html;
// carrito.map(producto => {
//     html += `<li>El producto es ${producto}</li>`
// });

// appContenedor.innerHTML = html;

//Arreglos Object.key - Pasar clave ----------------------------->

// const persona = {
//     nombre: 'juan',
//     profesion: 'Desarrollador web',
//     edad: 500
// }

// console.log(Object.keys(persona));

//Arreglos Spread Operator ... ----------------------------->

// const lenguajes = ['JavaScript', 'PHP', 'Python'];
// let frameworks = ['ReactJS', 'Laravel', 'Django'];

// Unir los dos arreglos en uno solo

// let combination = [...lenguajes,...frameworks];
// console.log(combination);

// let nuevoArreglo = [...lenguajes];
// console.log(nuevoArreglo)

// let [ultimo] = [...lenguajes].reverse(); // obtener el último elemento del arreglo

// console.log(lenguajes);
// console.log(ultimo);

// function suma(a,b,c){
//     console.log(`${a} ${b} ${c}`);
// }

// const numeros = [1,2,3];

// suma(...numeros);

//Arreglos Métodos disponibles en arreglos  ----------------------------->

// const personas = [
//     { nombre: 'juan', edad: 23, aprendiendo: 'Javascript' },
//     { nombre: 'Alan', edad: 35, aprendiendo: 'Javascript' },
//     { nombre: 'Chapo', edad: 29, aprendiendo: 'Javascript' },
//     { nombre: 'Jack', edad: 23, aprendiendo: 'Javascript' }]

//     console.log(personas)

//     const mayores = personas.filter(persona => {
//         return persona.edad > 28;
//     });

//     //console.log(mayores)

//     //que aprende Alejandra

//     const juan = personas.find(persona => {
//         return persona.nombre === 'juan';
//     });

//     // console.log(`Juan esta aprendiendo ${juan.aprendiendo}`)

//     //Sumar todas las edades de las personas

//     let total = personas.reduce((edadTotal, persona) => {
//         return edadTotal + persona.edad;
//     }, 0);

//     console.log(total / personas.length);

//Promesas  ----------------------------->

// const aplicarDescuento = new Promise((resolve, reject) => {

//     setTimeout( () => {
//         let descuento = true;

//         if(descuento){
//             resolve('Descuento aplicado!');
//         }else{
//             reject('No se puedo aplicar el descuento')
//         }
// }, 3000);

// });

// aplicarDescuento.then(resultado => {
//     console.log(resultado);
// })

//Promises con Ajax Request a API ----------------------------->

// const descargaUsuarios = cantidad => new Promise((resolve, reject) => {
//     //Pasando la cantidad a la API

//     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

//     //llamado a ajax
//     const xhr = new XMLHttpRequest();

//     //Abrir la conexion
//     xhr.open('GET', api, true);

//     //on load
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             resolve(JSON.parse(xhr.responseText).results);            
//         } else {
//             reject(Error(xhr.statusText));
//         }
//     }
//     //opcional (on Error)
//     xhr.onerror = (error) => reject(error);

//     //Enviar el request
//     xhr.send()
// });

// descargaUsuarios(20)
//     .then(
//         //Igualando la respuesta para ser impresa
//         miembros => imprimirHTML(miembros),
//         //miembros => console.log(miembros),        
//         error => console.error(
//             new Error('Hubo un error' + error)
//         )
//     )

//     const appContenedor = document.querySelector('#app');

//     function imprimirHTML(usuarios) {
//         let html; 
//         usuarios.forEach(usuario => {
//             html += `
//                 <li>
//                     Nombre: ${usuario.name.firts} ${usuario.name.last}
//                     País: ${usuario.nat}
//                     <img src="${usuario.picture.medium}">
//                 </li>
//             `
//         });

//         appContenedor.innerHTML = html;
//     }

//Programacion Orientada a Objetos - Clases ----------------------------->

// Escribir Clases

class Tarea {
    constructor(){

    }
}

//Crear objetos

let tarea1 = new Tarea('Aprender JavaScript', )