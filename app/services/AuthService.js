/**
 * Defines User roles.
 */
app.constant('USER_ROLES', {
    admin: 'ROLE_ADMIN',
    user: 'ROLE_USER',
    anonymous: 'ROLE_ANONYMOUS'
});

/**
 * Manages the method relatives to authentication and authorization.
 */
app.factory('AuthService', function ($http, Session, API_URL) {


    var authService = { };

    /**
     * Log a user in.
     * @param credentials Credentials of the user.
     * @returns The username of the logged in user.
     */
    authService.login = function (credentials) {
        return $http
            .post(API_URL + '/api/login', credentials)
            .then(function success(response) {

                // Create the session
                Session.create(response.data.username, response.data.roles,
                    response.data.access_token, response.data.refresh_token);

                return response.data.username;        // TODO return something ?
            }, function error(response) {
                alert('An error occurred : ' + response);
            });
    };

    authService.logout = function () {
        Session.destroy();
    };

    /**
     * Tells if someone is authenticated.
     * @returns {boolean} True if yes, otherwise false.
     */
    authService.isAuthenticated = function() {
        return !!Session.username;
    };

    /**
     * Tells if the authenticated user is authorized for an action.
     * @param authorizedRoles Roles of the user.
     * @returns {boolean} True if yes, otherwise false.
     */
    authService.isAuthorized = function(authorizedRoles) {
        if(!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
});

