app.factory('Answer', function($resource, API_URL) {

    // Define Answer resource
    return $resource(API_URL + '/answer/:answerId', {answerId: '@id'}, {});
});