angular.module('elephant.services.deejays', ['elephant.services.scratch'])
    .factory('deejays', function ($rootScope, scratch) {
        return {
            originator: 'DJ Kool Herc',
            technique: scratch.technique()
        };
    });