app.controller("QuestionController",
    function($scope, $route, $routeParams, $location, $translate,
             Question, Comment, Answer, User, Session, Tag) {

    // Get only one question
    $scope.getQuestion = function() {
        var id = $routeParams.id;

        Question.get({questionId:id}, function(question) {
            $scope.question = question;

            // Get user
            User.get({userId:question.user.id}, function(u) {
                question.user = u;
            });

            // Get comments
            question.comments.forEach(function(comment,index) {
                Comment.get({commentId:comment.id}, function (c) {
                    User.get({userId:c.user.id}, function(u) {
                        c.user = u;
                    });

                    question.comments[index] = c;
                });
            });

            // Get answers
            question.answers.forEach(function(answer, indexAnswer) {
                Answer.get({answerId:answer.id}, function (a) {
                    a.comments.forEach(function(comment, indexComment) {
                        Comment.get({commentId:comment.id}, function (c) {
                            User.get({userId:c.user.id}, function(u) {
                                c.user = u;
                            });

                            a.comments[indexComment] = c;
                        });
                    });
                    
                    User.get({userId:a.user.id}, function(u) {
                        a.user = u;
                    });

                    question.answers[indexAnswer] = a;
                });
            });
        });
    };

    $scope.setResolved = function(question) {
        if(!question.resolved){
            question.resolved = true;

            // Do the update
            Question.update({questionId: question.id}, question, function success() {

                // refresh
                $route.reload()
            }, function error(response) {
                $scope.updateError = 'An error ' + response.status + ' occurred';
            });
        }
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
    $scope.createQuestion = function(question,tags) {

        // Modify tags for sending
        var tags = [];

        for(key in question.tags) {
            tags.push({id: question.tags[key].id});
        }

        question.tags = tags;

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

    $scope.upVote = function(question) {
        Question.upVote({questionId: question.id}, question, function success() {
            question.vote++
        }, function error(response) {
            $scope.updateError = 'An error ' + response.status + ' occurred';
        });
    }

    $scope.downVote = function(question) {
        Question.downVote({questionId: question.id}, question, function success() {
            question.vote--
        }, function error(response) {
            $scope.updateError = 'An error ' + response.status + ' occurred';
        });
    }
});

