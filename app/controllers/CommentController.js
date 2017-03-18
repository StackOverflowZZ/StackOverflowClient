app.controller("CommentController",
    function($scope, $route, $location, Comment) {

    $scope.createComment = function(comment, idQuestion, idAnswer){


        alert(idQuestion);
        alert(idAnswer);

        // Post to the endpoint
        Comment.create(comment, function (idQuestion) {
            $route.reload()
        });
    };
});

