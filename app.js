var app = angular.module('StackOverflowClient',
    [
        'pascalprecht.translate',
        'ngRoute',
        'ngResource'
    ])
    .constant('API_URL', 'http://localhost:8080');

app.config(
    [
        '$httpProvider',
        '$routeProvider',
        '$resourceProvider',
        '$locationProvider',
        '$translateProvider',
        function($httpProvider, $routeProvider, $resourceProvider, $locationProvider, $translateProvider) {

        // httpProvider
        $httpProvider.defaults.useXDomain = true;               // Enable cross domain calls
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        // resourceProvider
        $resourceProvider.defaults.actions = {
            create:     {method: 'POST'},
            get:        {method: 'GET'},
            getAll:     {method: 'GET', isArray: true},
            update:     {method: 'PUT'},
            delete:     {method: 'DELETE'}
        };

        // locationProvider
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

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
            .when("/login", {
                templateUrl: 'views/user/auth.html',
                controller: 'UserController'
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