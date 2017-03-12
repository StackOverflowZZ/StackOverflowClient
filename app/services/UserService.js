app.factory('User', function($resource, API_URL, Session) {

    // Define Question resource
    var userResource = $resource(API_URL + '/user/:userId', {questionId: '@id'}, {  });

    return userResource;
});