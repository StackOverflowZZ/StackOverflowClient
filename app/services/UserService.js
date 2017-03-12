app.factory('User', function($resource, API_URL, Session) {

    // Define Question resource
    var userResource = $resource(API_URL + '/user/:userId', {questionId: '@id'}, {
        'getUserByName': {
            method: 'GET',
            url: API_URL + '/user/getUserByName/:userId'
        }
    });

    return userResource;
});