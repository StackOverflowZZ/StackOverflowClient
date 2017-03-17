app.factory('Feature', function($resource, API_URL, Session) {

    // Define Feature resource
    var featureResource = $resource(API_URL + '/feature/:featureId', {featureId: '@id'}, { });

    return featureResource;
});