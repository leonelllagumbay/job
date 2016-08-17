
// Used by protractor
describe('favourite rapper', function() {
    beforeEach(function() {
        browser.get('https://elephant-leonelllagumbay.c9users.io/');
    });
    
    // Testing the initial state of a scope object with Protractor
    it('should initialize scope parameter id to expected value', function() {
        var el = element(by.binding('id'));
        expect(el.getText()).toEqual('foo');
    });
    
    //  Testing interactive scope changes with Protractor
    it('should update scope parameter id to expected value', function() {
        $('.btn').click();
        var el = element(by.binding('id'));
        expect(el.getText()).toEqual('bar');
    });
    
    // Testing navigation scope changes with Protractor
    
    it('should update scope parameter id to expected value on navigation', function() {
        $('.btn1').click();
        
        var el = element(by.binding('state'));
        
        expect(el.getText()).toEqual('1');
    });
    
});