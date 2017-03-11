app.directive('comment', function () {
    return {
        restrict: 'E',
        scope: {
            comment: '=comment'
        },
        templateUrl: 'views/comment/show.html'
    };
});
