    function Convertidor(){
    
    
    
    }

    //Métodos

    Convertidor.aRadianes = function (grados){

        return grados * Convertidor.aGrados;

    }
    Convertidor.aGrados = function (radianes){

        return radianes * Convertidor.aGrados;

    }
    
    //Propiedades Estáticas
    
    Convertidor.GRADOS_A_RADIANES = Math.PI/180;
    Convertidor.RADIANES_A_GRADOS = 180/Math.PI;
    
    console.log('180 grados son ' + Convertidor.aRadianes(180) + ' Radianes');
    console.log('2PI radianes son ' + Convertidor.aGrados(2*Math.PI) + ' Grados');
    

    // ---> Propiedades Públicas

    /*function Persona(dni, nombre) {

        this.dni = dni
        this.nombre = nombre
        this._edad = 0;

    }

    var yo = new Persona('123123', 'Camilo')
    
    

    console.log(yo._edad)*/
