angular.module('computerStoreStore-templates', ['ngRoute'])

.config(['$routerProvider', function($routerProvider){

    $routerProvider.
    when('/templates', {

        templateUrl: 'templates/templates.html',
        controller: 'TemplatesCtrl'

    });

}])

.controller('TemplateCtrl', [function(){

    console.log('TemplateCtrl Init');

}])