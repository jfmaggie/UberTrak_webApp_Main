app.controller('statCtrl', ['$scope', 'ridehistory', function ($scope, ridehistory) {

    // Average ride time & ride time history - Meichen added
    ridehistory.success(function(data) {
        $scope.uberjsonfile = data;
    });


}]);