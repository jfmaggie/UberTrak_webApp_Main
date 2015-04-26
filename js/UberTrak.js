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

    // Sample Json Object returned here temporarily
    $scope.userHistory = 
        {
            "offset": 0,
            "limit": 1,
            "count": 2,
            "history": [
              {
                  "status": "completed",
                  "distance": 1.64691465,
                  "request_time": 1428876188,
                  "start_time": 1428876374,
                  "start_city": {
                      "latitude": 37.7749295,
                      "display_name": "San Francisco",
                      "longitude": -122.4194155
                  },
                  "end_time": 1428876927,
                  "request_id": "37d57a99-2647-4114-9dd2-c43bccf4c30b",
                  "currency_code": "USD",
                  "product_id": "a1111c8c-c720-46c3-8534-2fcdd730040d"
              },
              {
                    "status": "completed",
                    "distance": 2.64691465,
                    "request_time": 1428897600,
                    "start_time": 1428897780,
                    "start_city": {
                        "latitude": 37.7749295,
                        "display_name": "San Francisco",
                        "longitude": -122.4194155
                    },
                    "end_time": 1428898200,
                    "request_id": "37d57a99-2647-4114-9dd2-c43bccf4c30b",
                    "currency_code": "USD",
                    "product_id": "a1111c8c-c720-46c3-8534-2fcdd730040d"
              }
            ]
        };
});

app.controller('statCtrl', function ($scope) {
    console.log('PageStat');


    $(function () {
        // e.g. Spline Chart using jQuery Plugin

        // Initialize dataPoints from Json Object
        var dataPoints = [];
        for (var i = 0; i < $scope.userHistory.count; i++) {
            var historyItem = $scope.userHistory.history[i];
            if(historyItem.status == "completed")
                dataPoints.push({x:new Date(historyItem.request_time), y:historyItem.distance});
        }

        // Better to construct options first and then pass it as a parameter
        var options = {
            title: {
                text: "Ride distance"
            },
            animationEnabled: true,
            axisY: {
                suffix: " Miles"
            },
            axisX: {
                valueFormatString: "MMM",
                interval: 1,
                intervalType: "month"
            },
            data: [
            {
                type: "spline", //change it to line, area, column, pie, etc
                dataPoints: dataPoints
                // E.g.
                //[
                //    { x: new Date(2012, 01, 1), y: 12, },
                //]
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

