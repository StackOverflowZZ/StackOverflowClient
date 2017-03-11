app.factory('Question', function($resource, API_URL, Session) {

    // Define Question resource
    var questionResource = $resource(API_URL + '/question/:questionId', {questionId: '@id'}, { });

    return questionResource;
});