app.directive('answer', function () {
    return {
        restrict: 'E',
        scope: {
            comment: '=answer'
        },
        templateUrl: 'views/answer/show.html'
    };
});
