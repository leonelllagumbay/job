angular.module('elephant.directives.chapter5.deejay.1', []) 
.directive('deejay1', function($window) {
    return {
        restrict: 'E',
        template: '<div ng-show="showBooth" class="deejay1-booth"><h2 id="deejay1_name">{{deejay1.name}}</h2><p class="deejay1-style">{{deejay1.style}}</p><button class="hide-btn" ng-click="hideBooth()">Hide Booth</button></div>',
        link: function(scope) {
            scope.showBooth = true;
            
            scope.hideBooth =function() {
                scope.showBooth = false;
            }
        }
    };
});