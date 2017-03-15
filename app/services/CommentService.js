app.factory('Comment', function($resource, API_URL, Session) {
    // Define Question resource
    var commentResource = $resource(API_URL + '/comment/:commentId', {commentId: '@id'}, {});

    return commentResource;
});