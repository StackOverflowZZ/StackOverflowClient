var app = angular.module('StackOverflowClient',
    [
        'pascalprecht.translate',
        'ngRoute'
    ]);

app.config(
    [
        '$httpProvider',
        '$routeProvider',
        '$locationProvider',
        '$translateProvider',
        function($httpProvider, $routeProvider, $locationProvider, $translateProvider) {

        // httpProvider
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        // locationProvider
        $locationProvider.hashPrefix("!");
        //$locationProvider.html5Mode(true);

        // routeProvider
        $routeProvider
            .when("/", {
                templateUrl: 'views/question/index.html',
                controller: 'QuestionController'
            })
            .when("/questions", {
                templateUrl: 'views/question/index.html',
                controller: 'QuestionController'
            })
            .otherwise({
                templateUrl : "views/errors/error404.html"
            });

        // translateProvider
        $translateProvider
            .translations('en', translations_en)
            .translations('fr', translations_fr)
            .preferredLanguage('fr');
    }]
);

/*
app.controller('Ctrl', function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
});*/