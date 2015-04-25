var app = angular.module('single-page-app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('index', {
            url: '/index'
            //templateUrl: 'partial/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partial/about.html'
        })
        .state('stat', {
            url: '/stat',
            templateUrl: 'partial/stat.html'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'partial/profile.html'
        })
/*        .state('stat.statDefault', {
            url: '/statDefault',
            templateUrl: 'partial/stat.html'
        })
 */
        .state('stat.rideTime', {
            url: '/rideTime',
            templateUrl: 'partial/rideTime.html'
        })
        .state('home',{
            url: '/home',
            templateUrl: 'partial/home.html'
        });


});

app.controller('cfgController', function ($scope) {

    /*      
    Here you can handle controller for specific route as well.
    */



});
