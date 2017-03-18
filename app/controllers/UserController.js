app.controller("UserController",
    function($scope, $location, $routeParams, User, Question, Answer, Tag, Badge, AuthService) {

    $scope.getUser = function() {
        // Get user
        User.get({userId:$routeParams.id}, function success(user) {
           $scope.user = user;

            user.questions.forEach(function(question, index, array) {
                Question.get({questionId:question.id}, function success(q) {
                    array[index] = q
                });
            });

            // Get tags
            $scope.tags = [];
            Tag.getAll(function(tags) {
                tags.forEach(function(tag) {
                    $scope.tags[tag.id] = tag;
                })
            });

            // Get answers
            user.answers.forEach(function (answer, index, array) {
                Answer.get({answerId: answer.id}, function success(a) {

                    Question.get({questionId:a.question.id}, function success(question) {
                        a.question = question;
                    });

                    array[index] = a;
                });
            });

            // Get badges
            user.badges.forEach(function (badge, index, array) {
                Badge.get({badgeId: badge.id}, function success(b) {

                    array[index] = b;
                });
            });

        }, function error(response) {
            alert('Unable to get user !');
            $location.path('/');
        });
    };

    $scope.createUser = function(user) {
        // Post new user
        User.create(user, function success () {

            // Launch login process
            AuthService.login(user).then(function (username) {

                // Get information about user
                User.getUserByName({userId:username}, function success(user) {
                    // Define current user
                    $scope.setUser(user);

                    // Redirect to home
                    $location.path('/');
                }, function error(response) {
                    alert('Unable to retrieve user');
                });
            });

        }, function error () {
            $scope.error = 'Unable to register a user';
        });
    };

    $scope.updateUser = function(user) {

        // Do the update
        User.update({userId: user.id}, user, function success() {

            // Disconnect user
            AuthService.logout();
            $scope.setUser(null);

            // Redirect to home
            $location.path('/');

        }, function error(response) {
            $scope.updateError = 'An error ' + response.status + ' occurred';
        });

        if(user.id === $scope.session.id) {

        }
    };

    $scope.updateRole = function(user) {
        alert('TODO');
    };

    $scope.deleteUser = function(user) {

        if(confirm('Do you really want to delete the user? ')) {
            User.delete({userId: user.id}, function() {
                if(user.id === $scope.session.id) {
                    AuthService.logout();
                    $scope.setUser(null);
                }
                $location.path('/');
            })
        }
        else {
            alert('Annulé');
        }

        /*User.delete({userId:user.id}, function success() {

        })*/
    }

});


