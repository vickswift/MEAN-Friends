let app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'NewController',
            controllerAs: 'NC',
        })
        .when('/new',{
            templateUrl: 'partials/new.html',
            controller: 'NewController',
            controllerAs: 'NC',
        })
        .when('/edit/:_id', {
            templateUrl: 'partials/edit.html',
            controller: 'EditController',
            controllerAs: 'EC',
        })
        .when('/show/:_id', {
            templateUrl: 'partials/show.html',
            controller: 'EditController',
            controllerAs: 'EC',
        })
        .otherwise({
            redirectTo: '/'
        })
});