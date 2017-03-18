app.factory('Question', function($resource, API_URL) {

    // Define Question resource
    return $resource(API_URL + '/question/:questionId', {questionId: '@id'}, { 
        'upVote': {
            method: 'PUT',
            url: API_URL + '/question/upVote/:questionId'
        },
        'downVote': {
            method: 'PUT',
            url: API_URL + '/question/downVote/:questionId'
        }
    });
});