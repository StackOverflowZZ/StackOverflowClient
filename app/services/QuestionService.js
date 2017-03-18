app.factory('Question', function($resource, API_URL) {

    // Define Question resource
    return $resource(API_URL + '/question/:questionId', {questionId: '@id'}, { });
});