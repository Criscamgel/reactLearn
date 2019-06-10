
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
var edad:number = 23;

const PERSONAJE : {nombre:string, edad:number} = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto

interface Heroe {
  nombre:string;
  artesMarciales:string[]
}

var batman:Heroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
/* function resultadoDoble( a, b ){
  return (a + b) * 2
} */

let resultadoDoble = (a:number, b:number) => (a + b) * 2

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  var mensaje:string;
  if( poder ){
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma ${arma}`
  }else{
     mensaje = `${nombre} tiene un ${poder}`
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class rectangulo{
  base:number;
  altura:number;

  calcularArea():number{
    return this.base * this.altura
  }
}
