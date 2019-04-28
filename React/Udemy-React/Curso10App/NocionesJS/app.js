import Tarea from './tareas.js';
import ComprasPendientes from './compras.js'

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');

console.log(tarea1);
tarea1.mostrar();

const compra1 = new ComprasPendientes('Pizza', 'Urgente', 2);
compra1.mostrar()
compra1.hola()

// console.log(nombreTarea);

// const tarea1 = crearTarea('Pasear al perro', 'Media');

// console.log(tarea1);
// tareaCompletada();