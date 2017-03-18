app.factory('Answer', function($resource, API_URL) {

    // Define Answer resource
    return $resource(API_URL + '/answer/:answerId', {answerId: '@id'}, {
         'upVote': {
            method: 'PUT',
            url: API_URL + '/answer/upVote/:answerId'
        },
        'downVote': {
            method: 'PUT',
            url: API_URL + '/answer/downVote/:answerId'
        }
    });
});