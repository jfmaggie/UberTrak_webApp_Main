//This is controller for profile partial page.

app.controller('profileCtrl', function ($scope) {
    console.log('PageProfile');

    // Mockup data, to be replaced
    $scope.userProfile =
        {
            "first_name": "Sherlock",
            "last_name": "Holmes",
            "email": "sherlock.Watson@uber.com",
            "picture": "http://www.rlsandbox.com/img/profile.jpg",
            "promo_code": "teypo",
            "uuid": "91d81273-45c2-4b57-8124-d0165f8240c0"
        }
});