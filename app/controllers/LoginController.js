app.controller("LoginController", function($scope, $location, $route, AuthService) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function(credentials) {

        // Launch login process
        AuthService.login(credentials).then(function (username) {

            // Define current user
            $scope.setUsername(username);

            // Redirect to home
            $location.path('/');
        });
    };

    $scope.logout = function() {

        AuthService.logout();
        $scope.setUsername(null);

        $route.reload();
    }
});

