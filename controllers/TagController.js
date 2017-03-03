app.factory('Tag', function($resource, API_URL) {
    return $resource(API_URL + '/tag/show/:tagId', {tagId: '@tagId'});
});

app.controller("TagController", function($scope, $resource, API_URL) {

});
