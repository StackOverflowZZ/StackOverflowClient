var app = angular.module('StackOverflowClient',
    [
        'pascalprecht.translate',
        'ngRoute',
        'ngResource'
    ]);

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
        $httpProvider.defaults.headers.put['Content-Type'] = 'text/json';
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
            .when("/question/get/:id", {
                templateUrl: 'views/question/show.html',
                controller: 'QuestionController'
            })
            .when("/question/add", {
                templateUrl: 'views/question/create.html',
                controller: 'QuestionController'
            })
            .when("/question/edit/:id", {
                templateUrl: 'views/question/edit.html',
                controller: 'QuestionController'
            })
            .when("/comment/get/:id", {
                templateUrl: 'views/comment/show.html',
                controller: 'CommentController'
            })
            .when("/tag/show/:id", {
                templateUrl: 'views/tag/show.html',
                controller: 'TagController'
            })
            .when("/login", {
                templateUrl: 'views/user/auth.html',
                controller: 'LoginController'
            })
            .when("/user/create", {
                templateUrl: 'views/user/create.html',
                controller: 'LoginController'
            })
            .when("/user/edit/:id", {
                templateUrl: 'views/user/edit.html',
                controller: 'UserController'
            })
            .when("/features", {
                templateUrl: 'views/feature/index.html',
                controller: 'FeatureController'
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

/** Constants */
app.constant('API_URL', 'http://localhost:8080');