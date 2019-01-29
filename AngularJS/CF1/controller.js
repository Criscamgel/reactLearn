var app = angular.module("myApp", []);

app.controller("FirtsController", function($scope){

    $scope.nombre = "Camilo";
    $scope.nuevoComentario = {};
    $scope.comentarios = [

        {
            comentario: "Buen Tutorial",
            username: "codigofacilito"
        },
        {
            comentario: "Malisimo el Tutorial",
            username: "otro_usuario"
        }
    ];

    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
    }

});