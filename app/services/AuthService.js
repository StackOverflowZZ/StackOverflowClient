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

                // Assign http header
                $http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

                return response.data.username;        // TODO return something ?
            }, function error(response) {
                throw response;
            });
    };

    authService.logout = function () {
        Session.destroy();

        $http.defaults.headers.common['Authorization'] = '';
    };

    authService.isAdmin = function() {
        var roles = Session.getRoles();
        return roles.indexOf("ROLE_ADMIN") !== -1;
    };

    return authService;
});

