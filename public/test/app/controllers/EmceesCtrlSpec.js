describe('EmceesCtrl', function() {
    beforeEach(module('elephant.controllers.chapter3.ui.router'));
    beforeEach(module('elephant.controllers.EmceesCtrl'));
    
    it('should assign routeParams to scope', 
    inject(function($rootScope, $controller) {
        var scope = $rootScope.$new();
        $controller('EmceesCtrl', {
            $scope: scope,
            $routeParams: {
                id: '12'
            }
        });
        console.log('scope', scope.$id);
        expect(scope.$id).toEqual(2); 
    }))
})