app.controller("AnswerController",
    function($scope, $route, $location, Answer) {

    $scope.createAnswer = function(answer, idQuestion){
        answer.question={'id':idQuestion}

        // Post to the endpoint
        Answer.create(answer, function () {
            $route.reload()
        });
    };

    $scope.upVote = function(answer) {
        Answer.upVote({answerId: answer.id}, answer, function success() {
            answer.vote++
        }, function error(response) {
            $scope.updateError = 'An error ' + response.status + ' occurred';
        });
    }

    $scope.downVote = function(answer) {
        Answer.downVote({answerId: answer.id}, answer, function success() {
            answer.vote--
        }, function error(response) {
            $scope.updateError = 'An error ' + response.status + ' occurred';
        });
    }
});
