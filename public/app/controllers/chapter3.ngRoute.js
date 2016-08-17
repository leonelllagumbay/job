angular.module('elephant.controllers.chapter3.ngRoute', ['ngRoute']) 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/emcees/:id', {
            controller: 'EmceesCtrl'
        })
        .when('/home', {
            template: 'home.html',
            controller: 'HomeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}])