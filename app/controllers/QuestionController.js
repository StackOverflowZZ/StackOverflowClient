app.controller("QuestionController", function($scope, $resource, API_URL, Tag){

    var Questions = $resource(API_URL + '/question/index');
    Questions.getAll(function(questions) {

        questions.forEach(function(question) {
            question.tags.forEach(function(tag, index) {
                Tag.get({tagId:tag.id}, function(t) {
                    question.tags[index] = t;
                });
            });
        });

        $scope.questions = questions;
    });
});

