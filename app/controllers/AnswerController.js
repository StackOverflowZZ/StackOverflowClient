app.controller("AnswerController",
    function($scope, $route, $location, Answer) {

    $scope.createAnswer = function(anwser){
        // Post to the endpoint
        Answer.create(answer, function (answer) {
            $route.reload()
        });
    };
});
