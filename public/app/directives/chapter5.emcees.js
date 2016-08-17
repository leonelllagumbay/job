angular.module('elephant.directives.chapter5.emcees', [])
.directive('emcees', function() {
    return { 
        restrict: 'E',
        templateUrl: 'public/app/views/template.html',
        link: function(scope, element) {
            scope.emcee = scope.emcees[0];
            scope.deejay = {
                name: 'Shortee',
                style: 'turntablism'
            }
            scope.breakers = [{
                name: 'China Doll'
            },{
                name: 'Crazy Legs'
            },{
                name: 'Frosty Freeze'
            }];
        }
    }
})