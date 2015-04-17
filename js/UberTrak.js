var app = angular.module('single-page-app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partial/home.html'
        })
        .when('/about', {
            templateUrl: 'partial/about.html'
        })
        .when('/stat', {
            templateUrl: 'partial/stat.html'
        })
        .when('/profile', {
            templateUrl: 'partial/profile.html'
        });
});


app.controller('cfgController', function ($scope) {

    /*      
    Here you can handle controller for specific route as well.
    */

});
