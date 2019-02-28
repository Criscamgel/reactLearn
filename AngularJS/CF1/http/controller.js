var app = angular.module("myApp", []);

app.controller("FirtsController", function($http, $scope){

    $http.get("http://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    .success(function(data){
        console.log(data);        
    })
    .error(function(err){
    });

});