angular.module('cookbook', ['elephant.controllers.chapter4.SomeCtrl', 'ui.router', 'elephant.directives.chapter5.deejay.1'])
.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'MainCtrl'
        })
        .state('emcees', {
            url: '/emcees/:id',
            controller: 'EmceesCtrl'
        });
        $urlRouterProvider
        .otherwise('/home');
})
.controller('MainCtrl', ['$scope', function($scope, $state) {
    $scope.emcee = 'Kool G Rap'; 
    
    // Chapter 4 Testing navigation scope changes with Protractor
    $scope.id = 'foo';
    $scope.state = 'foo';
    $scope.loadEmcee = function(id) {
        //$state.go('emcees', {
         //   id: id
        //});
        $scope.state= "1";
    }
}]);     