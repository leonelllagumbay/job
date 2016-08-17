/*angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource) {
    $scope.jobs = $resource('/api/jobs').query();
    
});*/
/*describe('favourite rapper', function() {
    it('should bind to input', function() {
        browser.get('');
        expect(true).toBe(true);
    })
});
console.log('test protractor');
console.log('browser', browser.get(''));
console.log('element object', element);*/

//var angular = require('../bower_components/angular/angular');
/*angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource) {
    $scope.jobs = $resource('/api/jobs').query();
});*/

angular.module('artists', [])
.factory('Artists', ['imageStore',
function (imageStore) {
    // API
    return {
        thumb: function(id) {
            return imageStore.thumbnailUrl(id);
        }
    }
}])