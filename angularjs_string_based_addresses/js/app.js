var app = angular.module('exemplaryApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/book/:title', {
            controller: 'BookController',
            templateUrl: 'views/book.html'
        })
        .when('/author/:name', {
            controller: 'AuthorController',
            templateUrl: 'views/author.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
