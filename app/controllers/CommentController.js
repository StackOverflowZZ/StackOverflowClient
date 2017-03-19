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

     // Delete a comment
    $scope.deleteComment = function(comment) {
        Comment.delete({commentId: comment.id}, function() {
            $route.reload()
        });
    }

    $scope.upVote = function(comment) {
        Comment.upVote({commentId: comment.id}, comment, function success() {
            comment.vote++
        }, function error(response) {
            $scope.updateError = 'An error ' + response.status + ' occurred';
        });
    }

    $scope.downVote = function(comment) {
        Comment.downVote({commentId: comment.id}, comment, function success() {
            comment.vote--
        }, function error(response) {
            $scope.updateError = 'An error ' + response.status + ' occurred';
        });
    }

    $scope.updateComment = function(comment) {
        // Do the update
        Comment.update({commentId: comment.id}, comment, function success() {
            // refresh
            $route.reload()
        }, function error(response) {
            $scope.updateError = 'An error ' + response.status + ' occurred';
        });
    }

    $scope.toggleEditionComment = function($event, team){
        toggleEdition($($event.currentTarget),".comment_edition");
    }
});

