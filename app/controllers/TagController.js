app.factory('Tag', function($resource, API_URL) {
    return $resource(API_URL + '/tag/:tagId', {tagId: '@tagId'});
});

app.controller("TagController", function($scope, $routeParams, Question, Tag) {

    // Get one tag
    $scope.getTag = function() {

        var id = $routeParams.id;

        Tag.get({tagId: id}, function(tag) {
            $scope.tag = tag;

            // Get question
            tag.questions.forEach(function(question, index) {
                Question.get({questionId: question.id}, function(q) {
                    tag.questions[index] = q;
                })
            });
        });
    };

    // Get all tags
    $scope.getTags = function() {
        Tag.getAll(function(tags) {

            $scope.tags = tags;
        });
    };
});
