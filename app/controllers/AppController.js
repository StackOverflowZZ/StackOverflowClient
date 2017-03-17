app.controller('AppController', function ($scope, USER_ROLES, AuthService) {

    $scope.username = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthenticated = AuthService.isAuthenticated;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setUser = function (user, isAdmin) {
        $scope.session = user;
        $scope.isAdmin = isAdmin;
    };
});