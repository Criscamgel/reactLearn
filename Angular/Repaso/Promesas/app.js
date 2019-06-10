"use strict";
/* let prom1 = new Promise ( function (resolve, reject){
    setTimeout(()=>{
        console.log("promes terminada") */
//Termina Bien
/*  resolve() */
//Termina mal
/* reject()

}, 1500)
})
console.log("paso 1")
prom1.then(function(){
console.log("Ejecutarme cuando se termine bien!")
},
function(){
console.error("Ejecutarme si algo sale mal")
})

console.log("paso 1")  */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// -----> Interface
/* interface Xmen {
    nombre:string,
    poder:string
}

function enviarMision(xmen : Xmen){
    console.log(`Enviando a ${xmen.nombre}`)
}

function enviarCuartel(xmen:any){
    console.log(`Enviando a ${xmen.nombre}`)
}

let wolverine:Xmen = {
    nombre: "Wolverine",
    poder:"Regeneración"
}

enviarMision(wolverine) */
// -----------> Clases
/* class Avenger {
    nombre:string;
    equipo:string;
    nombreReal:string;

    //Es mas potente el Contructor
    constructor( nombre:string, equipo:string, nombreReal:string ){
        this.nombre = nombre
        this.equipo = equipo
        this.nombreReal = nombreReal
    }
}

let antman:Avenger = new Avenger("Camilo", "Cap", "Scott");

console.log(antman)
 */
// ---------------> Decoradores Clases
function consola(constructor) {
    console.log(constructor);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
