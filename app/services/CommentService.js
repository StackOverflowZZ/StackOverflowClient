app.factory('Comment', function($resource, API_URL) {

    // Define Comment resource
    return $resource(API_URL + '/comment/:commentId', {commentId: '@id'}, {
        'upVote': {
            method: 'PUT',
            url: API_URL + '/comment/upVote/:commentId'
        },
        'downVote': {
            method: 'PUT',
            url: API_URL + '/comment/downVote/:commentId'
        }
    });
});