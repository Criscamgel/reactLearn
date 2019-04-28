import Tarea from './tareas.js'

export default class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(`Quiero comprar ${this.nombre} con prioridad ${this.prioridad} y una cantidad de ${this.cantidad}`)
    }
    hola() {
        console.log('hola');
    }

}