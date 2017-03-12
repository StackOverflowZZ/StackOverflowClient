app.factory('Answer', function($resource, API_URL, Session) {

    // Define Question resource
    var answerResource = $resource(API_URL + '/answer/:answerId', {answerId: '@id'}, {});

    return answerResource;
});