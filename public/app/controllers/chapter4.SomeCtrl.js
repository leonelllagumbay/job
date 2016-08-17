angular.module('elephant.controllers.chapter4.SomeCtrl', [])
.controller('SomeCtrl', ['$scope', function($scope) {
    $scope.id = 'foo';    
    $scope.update = function() {
        $scope.id = 'bar';
    }
}]);
