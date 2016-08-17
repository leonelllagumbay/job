angular.module('elephant.services.scratch', [])
    .factory('scratch', function ($rootScope) {
        console.log('Called Scratch!');
        return {
            technique: function() {
                return 'breakbeat';
            }
        };
    });