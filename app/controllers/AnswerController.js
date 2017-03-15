app.controller("AnswerController",
    function($scope, $location, Answer) {

    $scope.createAnswer = function(anwser){
        // Post to the endpoint
        Answer.create(answer, function (answer) {
            $location.path('/question/get/{{answer.question.id}}');
        });
    };
});
