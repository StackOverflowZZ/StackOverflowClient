app.service('Session', function () {

    this.create = function (username, roles, accessToken, refreshToken) {
        this.username = username;
        this.roles = roles;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    };

    this.destroy = function () {
        this.username = null;
        this.roles = null;
        this.accessToken = null;
        this.refreshToken = null;
    };

    this.getAccessToken = function() {
        return this.accessToken;
    };

    this.getRoles = function() {
        return this.roles;
    };
});