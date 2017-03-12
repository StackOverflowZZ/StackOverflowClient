app.controller("UserController",
    function($scope, User) {

    $scope.createUser = function(user) {
        // Post new user
        User.create(user, function () {
            alert('lapin');
            $location.path('/');
        });
    };

});


