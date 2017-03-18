app.controller("AnswerController",
    function($scope, $route, $location, Answer) {

    $scope.createAnswer = function(answer, idQuestion){
        answer.question={'id':idQuestion}

        // Post to the endpoint
        Answer.create(answer, function () {
            $route.reload()
        });
    };
});
