// export const nombreTarea = 'pasear al perro'

// //Exportar una función

// export const crearTarea = (tarea, urgencia) => {
//     return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
// }

// export const tareaCompletada = () => {
//     console.log(`La tarea se completó`)
// }

// Escribir Clases

export default class Tarea {
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`)
    }
}
// //Herencia de Clases
// class ComprasPendientes extends Tarea {
//     constructor(nombre, prioridad, cantidad){
//         super(nombre, prioridad);
//         this.cantidad = cantidad;
//     }
//     mostrar(){
//         return `${super.mostrar()} y la cantidad es ${this.cantidad}`
//     }

// }

// //Crear objetos

// let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
// let tarea2 = new Tarea('Preparar Cafe', 'Media');
// let tarea3 = new Tarea('Pasear Al perro', 'Baja');
// let tarea4 = new Tarea('Conocer a mis suegros', 'Alta');

// // console.log(tarea1.mostrar())
// // console.log(tarea2.mostrar())
// // console.log(tarea3.mostrar())
// // console.log(tarea4.mostrar())

// let compra1 = new ComprasPendientes('Camilo', 'Aprender React', 3)
// // console.log(compra1.mostrar());