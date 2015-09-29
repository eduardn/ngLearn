(function (angular, _) {
    'use strict';

    angular.module('ngLearn.repositories', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('repositories', {
                url: '/repositories',
                templateUrl: 'views/repositoryList.html',
                controller: 'RepositoryList',
                controllerAs: 'repoListCtrl',
                resolve: {
                    'repositories': ['GithubReposService', function (githubRepos) {
                        return githubRepos.query().$promise;
                    }]
                }
            })
                .state('repositories.view', {
                    url: '/:id',
                    views: {
                        '@': {
                            controller: 'RepositoryView',
                            controllerAs: 'repoCtrl',
                            resolve: {
                                'repo': ['repositories', '$stateParams', function (repositories, $stateParams) {
                                    return _.findWhere(repositories, { id: parseInt($stateParams.id) });
                                }]
                            },
                            templateUrl: 'views/repositoryView.html',
                        }
                    }
                });
    }]);
})(angular, _);
