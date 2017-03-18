app.factory('Tag', function($resource, API_URL) {
    return $resource(API_URL + '/tag/:tagId', {tagId: '@tagId'});
});

app.controller("TagController", function($scope, Tag) {

    // Get all tags
    $scope.getTags = function() {
        Tag.getAll(function(tags) {

            $scope.tags = tags;
        });
    };

});
