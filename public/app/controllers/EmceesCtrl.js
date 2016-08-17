angular.module('elephant.controllers.EmceesCtrl', [])
    .controller('EmceesCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        console.log('route params', $routeParams);
        $scope.state = $routeParams.state;
    }]);