app.controller("QuestionController", function($scope, $resource, $http, $routeParams, API_URL, Question, User, Session, Tag) {

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

        // TODO : to finish

        // Post to the endpoint
        Question.create(question, function () {
            alert("Coucou");
        });



        /*Questions.create    ({question: question}, function(response) {
            // TODO : add redirect
            alert("Question posted !");
        })*/

    };

    // Get only one question
    $scope.getQuestion = function() {
        var id = $routeParams.id;

        Questions.get({questionId:id}, function(question) {
            $scope.question = question;

            // Get user
            User.get({userId:id}, function(user) {
                $scope.user = user;
            });

            // Get comments



            // Get answers
        });
    };
});

