app.controller("UserController",
    function($scope, $location, $routeParams, User, AuthService) {

    $scope.getUser = function() {
        // Get user
        User.get({userId:$routeParams.id}, function success(user) {
           $scope.user = user;
        }, function error(response) {
            alert('Unable to get user !');
            $location.path('/');
        });

        $scope.isAdmin = AuthService.isAdmin();
    };

    $scope.createUser = function(user) {
        // Post new user
        User.create(user, function success () {

            // Launch login process
            AuthService.login(user).then(function (username) {

                // Get information about user
                User.getUserByName({userId:username}, function success(user) {
                    // Define current user
                    $scope.setUser(user);

                    // Redirect to home
                    $location.path('/');
                }, function error(response) {
                    alert('Unable to retrieve user');
                });
            });

        }, function error () {
            $scope.error = 'Unable to register a user';
        });
    };

});


