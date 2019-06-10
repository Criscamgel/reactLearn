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

   function consola(constructor:Function){
    console.log( constructor )
   } 

 @consola
 class Villano{
     constructor( public nombre:string){
         this.nombre = nombre;
     }
 }