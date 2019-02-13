var app = angular.module("computerStoreStore",['ngRoute', 'computerStore.services', 'computerStore.about', 'computerStore.contact'])

.config(['$routeProvider', function($routeProvider){

    $routeProvider.otherwise({redirectTo: '/index.html'})
    

}])

