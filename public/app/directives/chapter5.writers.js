angular.module('elephant.directives.chapter5.writers', [])
.directive('writers', function($window) {
    return {
        restrict: 'E',
        link: function(scope, element) {
            element.text('Graffiti artist: ' + scope.artist);
            
            // Scope changes based on DOM events
            function onResize(e) {
                scope.windowWidth = $window.outerWidth;
                scope.$digest();
            }
            
            angular.element($window).bind('resize', onResize);
        }
    };
});