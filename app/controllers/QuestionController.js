app.controller("QuestionController", function($scope, $resource, API_URL, Session, Tag){

    var Questions = $resource(API_URL + '/questions', {},
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

    $scope.createQuestion = function(question) {

        alert('Question posted !');

        // Post to the endpoint
        Questions.create(question, function(response) {
            // TODO : add redirect
        })

    };
});

