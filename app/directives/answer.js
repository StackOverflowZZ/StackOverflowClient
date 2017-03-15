app.directive('answer', function () {
    return {
        restrict: 'E',
        scope: {
            answer: '=answer'
        },
        templateUrl: 'views/answer/show.html'
    };
});
