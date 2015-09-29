(function (angular) {
    'use strict';

    angular.module('ngLearn.repositories')
        .factory('GithubReposService', ['$resource', function ($resource) {
            return $resource('http://api.github.com/repositories');
        }]);
})(angular);
