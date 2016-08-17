angular.module('elephant.controllers.chapter3.ui.router', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', 
    function($urlRouterProvider, $stateProvider) { 
        console.log('ui router');
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/views/home.html'
        })
        .state('emcees', {
            url: '/emcees',
            template: 'Test template'
        })
        $urlRouterProvider
        .otherwise('/home');
    }]);