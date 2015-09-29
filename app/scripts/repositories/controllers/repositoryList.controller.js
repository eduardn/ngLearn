(function (angular) {
    'use strict';

    angular.module('ngLearn.repositories')
        .controller('RepositoryList', ['repositories', function (repos) {
            var vm = this;
            vm.list = repos;
        }]);
})(angular);
