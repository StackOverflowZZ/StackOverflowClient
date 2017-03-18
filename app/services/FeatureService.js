app.factory('Feature', function($resource, API_URL) {

    // Define Feature resource
    return $resource(API_URL + '/feature/:featureId', {featureId: '@id'}, {});
});