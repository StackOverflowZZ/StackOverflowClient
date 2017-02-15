var app = angular.module('StackOverflowClient', ['pascalprecht.translate']);

app.config(
    ['$translateProvider', function ($translateProvider) {
        $translateProvider
            .translations('en', translations_en)
            .translations('fr', translations_fr)
            .preferredLanguage('fr');
    }],
    ['httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }],
    [ function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }]
);

app.controller('Ctrl', function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
});