app.factory('Comment', function($resource, API_URL) {

    // Define Comment resource
    return $resource(API_URL + '/comment/:commentId', {commentId: '@id'}, {});
});