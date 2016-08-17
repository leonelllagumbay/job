describe("deejay spec", function() {
    var $window;
    var element;
    beforeEach(module('elephant.directives.chapter5.deejay'));
    beforeEach(inject(function(_$window_) {
        $window = _$window_;
    }));
    
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<deejay></deejay');
        $compile(element)(scope);
        scope.$digest();
    }));
    
    it('should have specific popup class if window name contains popup', function() {
        var divClasses = element.find('div').attr('class');
        $window.name = 'popup';
        //expect(divClasses).toContain('popup');
        expect(divClasses.split(/\s+/g)).toContain('popup');
    })
});


