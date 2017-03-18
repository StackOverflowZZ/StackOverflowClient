app.controller("CommentController",
    function($scope, $route, $location, Comment) {

    $scope.createComment = function(comment, idQuestion, idAnswer){
        var question = {id:null};
        var answer = {id:null};

        question.id=idQuestion;


        if(idAnswer!=null){
            answer.id=idAnswer;
            comment.answer = answer;
        } else {
            comment.question = question;
        }

        // Post to the endpoint
        Comment.create(comment, function (idQuestion) {
            $route.reload()
        });
    };
});

