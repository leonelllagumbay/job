
// Used by protractor
describe('favourite rapper', function() {
    beforeEach(function() {
        browser.get('https://elephant-leonelllagumbay.c9users.io/');
    });
    
    it('should show content on page load', function() {
        var deejay1Booth = $('[ng-show=showBooth].deejay1-booth');
        
        expect(deejay1Booth.isDisplayed()).toBeTruthy();
        
    });
    
   it('should hide content on button click', function() {
        var  deejay1Booth = $('[ng-show=showBooth].deejay1-booth');
        $('.hide-btn').click();
        
        expect(deejay1Booth.isDisplayed()).toBeFalsy();
    });
    
});