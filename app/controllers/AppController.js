app.controller('AppController', function ($scope, $timeout) {

    $scope.setUser = function (user, isAdmin) {
        $scope.session = user;
        $scope.isAdmin = isAdmin;
    };

    $scope.setFlash = function(message) {
        $scope.flash = message;

        $timeout(function() {
            $scope.flash = null
        }, 5000);
    }


});