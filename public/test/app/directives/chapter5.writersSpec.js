describe('chapter 5 writers', function() {
    var element;
    var scope;
    var artist ;
    
    beforeEach(module('elephant.directives.chapter5.writers')); 
    
    beforeEach(function() {
        artist = 'Amara Por Dios';
    });
    
    beforeEach(inject(function($rootScope, $compile) {
        // Create an angular element providing the directive HTML string
        scope = $rootScope.$new();
        
        element = angular.element('<writers></writers');
        scope.artist = artist;
       
        // Compile the element providing our scope object using the $compile service
        // The $compile service can compile HTML strings into a template and produces a template function. This function can
        // then be used to link the scope and the template together.
        $compile(element)(scope);
        
        // Now, call $digest on scope to simulate the scope life cycle
        scope.$digest();
    }));
    
    // Scope changes based on window events
    beforeEach(inject(function(_$window_) {
        $window = _$window_;
    }));
    
    // Finally, to confirm whether these steps work as expected, write a simple test that
    // uses the text() method available on the Angular element.
    it('should display correct text in the DOM', function() {
        expect(element.text()).toBe('Graffiti artist: ' + artist);
        
        // jQuery lite ref https://docs.angularjs.org/api/ng/function/angular.element
    });
    
    
    
    
    it('should update scope with current window width on window resize', function() {
        // Using the $window service, call its resizeTo() method by passing in a width and height value 100:
        $window.resizeTo(500, 600);
        $window.focus();
        
        function dispatchEvent(type) {
            var evt = document.createEvent('Event');
            evt.initEvent(type, true, true);
            $window.dispatchEvent(evt);
        }
        
        dispatchEvent('resize');
        
        expect(scope.windowWidth).toBe(0); 
    });
    
    
});