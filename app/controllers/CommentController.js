app.controller("CommentController",
    function($scope, $route, $location, Comment) {

    $scope.createComment = function(comment, idAnswer, idQuestion){

        if(idAnswer!=null){
            comment.answer={'id':idAnswer}
        }

        if(idQuestion!=null){
            comment.question={'id':idQuestion}
        }

        // Post to the endpoint
        Comment.create(comment, function () {
            $route.reload()
        });
    };
});

