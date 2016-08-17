describe('Ui Router', function() {
    console.log('here');
    beforeEach(module('elephant.controllers.chapter3.ui.router'));
    
    var scope;
    var state;
    /*beforeEach(inject(function($templateCache) { 
       $templateCache.put('home.html', '');
    }));*/
    beforeEach(inject(function($rootScope, $state) {
        scope = $rootScope.$new();
        state = $state;   
    }));
    
    
    /*it('default state should be home', inject(function($rootScope, $state) {
        $rootScope.apply();
        
        expect($state.current.name).toEqual('home');
    }));*/
    
    /*it ('default state should be home', function() {
        scope.$apply();
        expect(state.current.name).toEqual('home');
    });
    
    it ('should transition to emcees state', function() {
        state.go('emcees');
        scope.$apply();
        expect(state.current.name).toEqual('emcees');
    })*/
    
    /*it ('should transition to emcees state passing the correct id param', function() {
        state.go('emcees', {id: '1'});
        scope.$apply();
        expect(state.params.id).toEqual(id);
    });
       */
    

})