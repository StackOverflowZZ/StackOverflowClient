app.controller("CommentController",
    function($scope, $route, $location, Comment) {

    $scope.createComment = function(comment){

        // Post to the endpoint
        Comment.create(comment, function (idQuestion) {
            $route.reload()
        });
    };
});

