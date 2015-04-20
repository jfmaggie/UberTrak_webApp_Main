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

app.controller('statCtrl', function ($scope) {
    console.log('PageStat');
    // e.g. Spline Chart using jQuery Plugin
    $(function () {
        //Better to construct options first and then pass it as a parameter
        var options = {
            title: {
                text: "Ride time"
            },
            animationEnabled: true,
            axisY: {
                suffix: " Minutes"
            },
            axisX: {
                valueFormatString: "MMM",
                interval: 1,
                intervalType: "month"
            },
            data: [
            {
                type: "spline", //change it to line, area, column, pie, etc
                dataPoints:[
                    { x: new Date(2012, 01, 1), y: 12, },
                    { x: new Date(2012, 02, 1), y: 8 },
                    { x: new Date(2012, 03, 1), y: 28 },
                    { x: new Date(2012, 04, 1), y: 6 },
                    { x: new Date(2012, 05, 1), y: 24 },
                    { x: new Date(2012, 06, 1), y: 10 },
                ]
            }
            ]
        };

        $("#chartContainer").CanvasJSChart(options);

    });
});

app.controller('homeCtrl', function ($scope) {
    console.log('PageHome');
});

app.controller('aboutCtrl', function ($scope) {
    console.log('PageAbout');
});

app.controller('profileCtrl', function ($scope) {
    console.log('PageProfile');
});

