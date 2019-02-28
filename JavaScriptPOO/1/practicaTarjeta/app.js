
    // ---> Clase Información

    var nombre = document.getElementById("nombre").value
    var codigo = document.getElementById("codigo").value
    var color = document.getElementById("color").value

function crearTarjeta(){
        
    alert("Hola");
    
    }

    function infoTarjeta(nombre, codigo, color) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.color = color;        

    }

    var tarjeta = new infoTarjeta(document.getElementById("nombre"), document.getElementById("codigo").value, document.getElementById("color"))

    console.log(tarjeta.nombre)
    console.log(tarjeta.codigo)
    console.log(tarjeta.color)
    
