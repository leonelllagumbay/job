/*angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource) {
    $scope.jobs = $resource('/api/jobs').query();
    
    browser.get('');
    console.log('element', element);
});*/
describe('favourite rapper', function() {
    it('should bind to input', function() {
        browser.get('');
        expect(true).toBe(true);
    })
});
console.log('test protractor');
console.log('browser', browser.get(''));
console.log('element object', element);