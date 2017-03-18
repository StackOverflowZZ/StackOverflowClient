app.controller("AnswerController",
    function($scope, $route, $location, Answer) {

    $scope.createAnswer = function(anwser, idQuestion){
        anwser.question={'id':idQuestion}

        // Post to the endpoint
        Answer.create(answer, function () {
            $route.reload()
        });
    };
});
