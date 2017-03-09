app.controller("UserController", function($scope, $http, API_URL) {

    var accessToken = null;
    var refreshToken = null;

    $scope.login = function(user) {
        $http({
            method: 'POST',
            url: API_URL + '/api/login',
            data: {
                username: user.username,
                password: user.password
            }
        }).then(function success(data) {
            alert(data);
            accessToken = data.access_token;
            alert(accessToken);
        }, function error(response) {
            alert('error : ' + response );
        })

    }

});

