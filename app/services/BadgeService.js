app.factory('Badge', function($resource, API_URL) {

    // Define Badge resource
    return $resource(API_URL + '/badge/:badgeId', {badgeId: '@id'}, {});
});