var app = angular.module('single-page-app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'partial/home.html',
            controller: 'homeCtrl'
        })
        .when('/about', {
            templateUrl: 'partial/about.html',
            controller: 'aboutCtrl'
        })
        .when('/stat', {
            templateUrl: 'partial/stat.html',
            controller: 'statCtrl'
        })
        .when('/profile', {
            templateUrl: 'partial/profile.html',
            controller: 'profileCtrl'
        });
});


app.controller('cfgController', function ($scope) {
  /*
    Here you can handle controller for specific route as well.
    */

});
/*
app.controller('statCtrl', function ($scope) {



});
*/
app.controller('homeCtrl', function ($scope) {
    console.log('PageHome');
});

app.controller('aboutCtrl', function ($scope) {
    console.log('PageAbout');
});

app.controller('profileCtrl', function ($scope) {
    console.log('PageProfile');
});

