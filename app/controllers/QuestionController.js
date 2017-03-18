app.controller("QuestionController",
    function($scope, $routeParams, $location, $translate,
             Question, Comment, Answer, User, Session, Tag) {

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
            question.comments.forEach(function(comment,index) {
                Comment.get({commentId:comment.id}, function (c) {
                    question.comments[index] = c;
                });
            });

            // Get answers
            question.answers.forEach(function(answer, indexAnswer) {
                Answer.get({answerId:answer.id}, function (a) {
                    a.comments.forEach(function(comment, indexComment) {
                        Comment.get({commentId:comment.id}, function (c) {
                            a.comments[indexComment] = c;
                        });
                    });
                    question.answers[indexAnswer] = a;
                });
            });
        });
    };

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

            $scope.setFlash($translate.instant('QUESTION.CREATED'));
            $location.path('/');
        });
    };

    // Delete a question
    $scope.deleteQuestion = function(question) {

        // Delete the question
        Question.delete({questionId: question.id}, function() {

            $scope.setFlash($translate.instant('QUESTION.DELETED'));
            $scope.getQuestions();

        });
    }
});

