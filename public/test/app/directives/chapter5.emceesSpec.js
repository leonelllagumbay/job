describe('chapter 5 emcees', function() {
    var element;
    var scope;  
    var emcees = ['Roxanne Shante', 'Mc Lyte'];
    
    // Accessing basic HTML content ===========
    var deejay = {
        name: 'Shortee',
        style: 'turntablism'
    };
    // ========================================

    
    // https://github.com/miickel/gulp-angular-templatecache
    beforeEach(module('elephant.directives.chapter5.emcees', 'test-templates'));
    
    // Next, create a beforeEach function to inject the necessary dependencies and create a new scope instance and assign
    // the artist to scope:
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        scope.emcees = emcees;
        element = angular.element('<emcees></emcees>');
       
        $compile(element)(scope);
        scope.$digest();
        
    }));
    
    it('should set the scope property id to the correct initial value', function() {
        var h1 = element.find('h1');
        expect(h1.text()).toBe(emcees[0]);
    });
    
    it('should return an element using find()', function() {
        var h2 = element .find('h2');
        expect(h2[0]).toBeDefined();
    });
    
    // Still defined even though the element does not exist
    it('should return an element using querySelector and css selector', function() {
        var elementByClass = element[0].querySelector('.deejay-style');
        expect(elementByClass).toBeDefined();
        
        var elementByClass = element[0].querySelector('#deejay');
        expect(elementByClass).toBeDefined();
    });
    
    it('should display correct deejay data in the DOM', function() {
        var h2 = element.find('h2');
        expect(h2.html()).toBe(deejay.name);
        //expect(h2.text()).toBe(deejay.name);
    });
    
    it('should display the correct breaker name', function() {
        var list = element.find('li');
        expect(list.eq(0).text()).toBe('China Doll');
    });
    

})