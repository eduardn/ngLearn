(function (angular) {
    'use strict';

    angular.module('ngLearn.repositories')
        .controller('RepositoryView', ['repo', function (repo) {
            var vm = this;
            vm.repo = repo;
        }]);
})(angular);
