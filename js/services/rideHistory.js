app.factory('ridehistory', ['$http', function($http) {
  // get uber api url json file need to be replaced
  return $http.get('http://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  });
}]);