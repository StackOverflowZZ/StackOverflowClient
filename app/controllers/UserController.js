app.controller("UserController",
    function($scope, $location, $routeParams, $translate,
         User, Question, Answer, Tag, Badge, AuthService) {

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
            $scope.setFlash($translate.instant('ERROR') + response.status);
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
                    $scope.setFlash($translate.instant('ERROR') + response.status);
                });
            });

        }, function error () {
            $scope.error = 'Unable to register a user';
        });
    };

    $scope.updateUser = function(user) {

        // Do the update
        User.update({userId: user.id}, user, function success() {

            $scope.setFlash($translate.instant('USER.UPDATED'));

            if(user.id === $scope.session.id) {

                // Disconnect user
                AuthService.logout();
                $scope.setUser(null);

                // Redirect to home
                $location.path('/');
            }

        }, function error(response) {
            $scope.updateError = $translate.instant('ERROR') + response.status;
        });
    };

    $scope.updateRole = function(user, role) {

        var newRole = null;

        for(var r in role) {
            if(role[r]) {
                if(newRole != null) {
                    $scope.setFlash('Only one role can be chosen');
                    newRole = null;
                    break;
                }
                else {
                    newRole = {'role': r};
                }
            }
        }

        if(newRole != null) {
            User.updateRole({userId: user.id}, newRole, function success() {
                $scope.setFlash($translate.instant('USER.UPDATED'));
            },
            function error(response) {
                $scope.setFlash($translate.instant('ERROR') + response.status);
            });
        }

    };

    $scope.deleteUser = function(user) {

        if(confirm($translate.instant('USER.DELETE.CONFIRM'))) {
            User.delete({userId: user.id}, function success() {
                if(user.id === $scope.session.id) {
                    AuthService.logout();
                    $scope.setUser(null);
                }
                $location.path('/');
            }, function error(response) {
                $scope.setFlash($translate.instant('ERROR') + response.status);
            })
        }
        else {
            alert($translate.instant('USER.DELETE.CANCELLED'));
        }
    }

});


