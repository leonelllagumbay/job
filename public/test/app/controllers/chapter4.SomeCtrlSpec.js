describe("Some Controllers", function() {
    
    beforeEach(module('elephant.controllers.chapter4.SomeCtrl'));

    beforeEach(inject(function($rootScope) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
    }));
    
    beforeEach(inject(function ($controller) {
        $controller('SomeCtrl', {
            $scope: scope
        });
    }));
    
    // The injected $controller service is passed a string that's used to retrieve
    //  the controller constructor. The second argument that we provide is an object that is used to
    // inject locals into the controller. This is the location where you can inject mock and spy data or
    // services to thoroughly test your controllers.
    
    // Tip: The object key must match the variable name of the injected resource it's replacing
    
    // We provide the scope object created to be injected into the newly created controller instance,
    // which enables us to match expectations on scope values throughout tests.
    
    // Testing the initial state of a scope object
    
    // Create a basic test to establish that the initial scope property value is what we expect
    
    it('should set the scope property id to the corrrect initial value', function() {
        expect(scope.id).toBe('foo');
    })
});

