app.controller("AnswerController",
    function($scope, $route, $location, Answer) {

    $scope.createAnswer = function(answer, idQuestion){
        answer.question={'id':idQuestion}

        // Post to the endpoint
        Answer.create(answer, function () {
            $route.reload()
        });
    };

    $scope.deleteAnswer = function(answer) {
        Answer.delete({answerId: answer.id}, function() {
            $route.reload()
        });
    }

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

    $scope.updateAnswer = function(answer) {
        // Do the update
        Answer.update({answerId: answer.id}, answer, function success() {
            // refresh
            $route.reload()
        }, function error(response) {
            $scope.updateError = 'An error ' + response.status + ' occurred';
        });
    }

    $scope.toggleEditionAnswer = function($event, team){
        toggleEdition($($event.currentTarget),".answer_edition");
    }
});
