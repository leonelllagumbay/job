describe("breakers", function() {
    var breakers = [];
    var scope;
    var element;
    beforeEach(module('cookbook'));
    beforeEach(module('elephant.directives.chapter5.breakers'));
    
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        scope.breakers = [];
        element = angular.element('<breakers></breakers');
        $compile(element)(scope);
        scope.$digest();
    }));
    
    beforeEach(inject(function($controller) {
        $controller('MainCtrl', {
            $scope: scope
        });
    }));
    
    it('should update breakers list with defined input value', function() {
        
        //console.log('before each 2', element);
        $input().val('China Doll');
        
        // Manually trigger our key-press event by calling the onSubmit() method and pass an object
        // with the minimal information required to satisfy the handler's requirements
        
        // Trigger submit using Enter key
        scope.onSubmit({
            which: 13, 
            preventDefault: function() {
                // This is called by the handler in our directive
                // "" function will suffice to satify this dependecy
            },
            target: $input()[0]
        });
        
        expect(scope.breakers[0].name).toBe('China Doll');
    });

    function $input() { // a helper function
        return element.children().eq(0);
    }
});


