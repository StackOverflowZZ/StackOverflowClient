app.factory('User', function($resource, API_URL) {

    // Define User resource
    return $resource(API_URL + '/user/:userId', {userId: '@id'}, {
        'getUserByName': {
            method: 'GET',
            url: API_URL + '/user/getUserByName/:userId'
        }
    });
});