app.controller("QuestionController", function($scope, $resource, $routeParams, API_URL, Question, User, Session, Tag) {

    // Define Question resource
    var Questions = $resource(API_URL + '/question/:questionId', {questionId: '@id'},
    {
        create: {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + Session.getAccessToken(),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(data) {
                var key, result = [], response;
                if(typeof data == "string") {
                    response = data;
                } else {
                    for (key in data) {
                        if (data.hasOwnProperty(key)) {
                            result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
                        }
                    }
                    response = result.join("&");
                }
                return response;
            }
        }
    });

    // Get all questions for index.
    $scope.getQuestions = function() {
        Questions.getAll(function(questions) {

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
        Questions.create(question, function(response) {
            // TODO : add redirect
            alert("Question posted !");
        })

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

