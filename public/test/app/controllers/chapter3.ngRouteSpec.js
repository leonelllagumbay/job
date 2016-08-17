describe('Route', function() {
    beforeEach(module('elephant.controllers.chapter3.ngRoute'));
    
    it('route controller should be mapped to HomeCtrl',
    inject(function ($rootScope, $location, $route) {
        $location.path('/home');
        $rootScope.$apply(); 
        console.log('route path', $route.current.controller);
        expect($route.current.controller).toEqual('HomeCtrl'); 
    }));
}); 



