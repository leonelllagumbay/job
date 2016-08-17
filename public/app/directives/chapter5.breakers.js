angular.module('elephant.directives.chapter5.breakers', [])
.directive('breakers', function() {
    return {
        restrict: 'E',
        template: '<input type="text" name="input" value="" ng-keypress="onSubmit($event)"><ul><li ng-repeat="breaker in breakers">{{breaker.name}}</li></ul>',
        link: function(scope) {
            scope.onSubmit = function(event) {
                if (event.which === 13) {
                    var input = event.target;
                    scope.breakers.push({name: input.value});
                }
            }
        }
    };
});