app.controller("LoginController", function($scope, $location, $translate, $route, AuthService, User) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function(credentials) {

        // Launch login process
        AuthService.login(credentials).then(function success(username) {

            // Get information about user
            User.getUserByName({userId:username}, function success(user) {
                // Define current user
                $scope.setUser(user, AuthService.isAdmin());

                // Redirect to home
                $location.path('/');
            }, function error(response) {
                alert('Unable to retrieve user');
            });
        }, function error() {
            $scope.setFlash($translate.instant('LOGIN.ERROR'));
        });
    };

    $scope.logout = function() {

        AuthService.logout();
        $scope.setUser(null, false);

        $route.reload();
    }
});

