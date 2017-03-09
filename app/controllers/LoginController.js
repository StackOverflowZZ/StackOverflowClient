app.controller("LoginController", function($scope, $location, $route, AuthService) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function(credentials) {

        // Launch login process
        AuthService.login(credentials).then(function (username) {

            //$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);      // TODO : ??
            $scope.setUsername(username);

            // Redirect to home
            $location.path('/');
        }, function() {
            //$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };

    $scope.logout = function() {

        AuthService.logout();
        $scope.setUsername(null);

        $route.reload();
    }
});

