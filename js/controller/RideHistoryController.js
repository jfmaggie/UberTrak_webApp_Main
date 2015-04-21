app.controller('statCtrl', ['$scope', 'ridehistory', function ($scope, ridehistory) {

    // drawing char with canvasJS
    console.log('PageStat');
    // e.g. Spline Chart using jQuery Plugin
    $(function () {
        //Better to construct options first and then pass it as a parameter
        var options = {
            title: {
                text: "Ride time"
            },
            animationEnabled: true,
            axisY:{
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
        $(".chartContainer").CanvasJSChart(options);
    });

    // Average ride time & ride time history - Meichen added
    ridehistory.success(function(data) {
        $scope.uberjsonfile = data;
    });

}]);