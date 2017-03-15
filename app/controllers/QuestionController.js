app.controller("QuestionController",
    function($scope, $routeParams, $location,
             Question, Comment, Answer, User, Session, Tag) {

    // Get all questions for index.
    $scope.getQuestions = function() {
        Question.getAll(function(questions) {

            questions.forEach(function(question) {
                question.tags.forEach(function(tag, index) {
                    Tag.get({tagId:tag.id}, function(t) {
                        question.tags[index] = t;
                    });
                });
            });

            $scope.questions = questions;
        });
    };

    // Create a question
    $scope.createQuestion = function(question) {

        // Post to the endpoint
        Question.create(question, function () {
            $location.path('/');
        });

    };

    // Get only one question
    $scope.getQuestion = function() {
        var id = $routeParams.id;

        Question.get({questionId:id}, function(question) {
            $scope.question = question;

            // Get user
            User.get({userId:id}, function(user) {
                $scope.user = user;
            });

            // Get comments
            $scope.comments = [];
            question.comments.forEach(function(comment) {
                Comment.get({commentId:comment.id}, function (comment) {
                    $scope.comments[comment.id] = comment;
                });
            });

            //$scope.comments = comments;


            // Get answers
            $scope.answers = [];
            question.answers.forEach(function(answer) {
                Answer.get({answerId:answer.id}, function (answer) {
                    var comments = [];
                    answer.comments.forEach(function(comment) {
                        Comment.get({commentId:comment.id}, function (comment) {
                            answer.comments[
                                answer.comments.indexOf(
                                    answer.comments.find(function(element){
                                         return element.id == comment.id;
                                    })
                                )
                            ] = comment
                        });
                    });
                    $scope.answers[answer.id] = answer;
                });
            });
        });
    };
});

