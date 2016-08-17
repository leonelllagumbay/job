angular.module('elephant.directives.chapter5.deejay', [])
.directive('deejay', function($window) {
    return {
        restrict: 'E',
        template: '<div class="deejay-booth" ng-class="{popup: isPopup === true}"></div>',
        link: function(scope) {
            scope.isPopup = $window.name.search(/popup/) >= 0;
        }
    };
});