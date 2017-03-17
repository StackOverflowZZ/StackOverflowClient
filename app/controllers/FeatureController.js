app.controller("FeatureController",
    function($scope, $routeParams, $location, Feature) {

    // Get all questions for index.
    $scope.getFeatures = function() {
        Feature.getAll(function(features) {
            $scope.features = features;
        });
    };

    $scope.toggleFeature = function(feature) {

        feature.enable = !feature.enable
        // Do the update
        Feature.update({featureId: feature.id}, feature, function success() {

            // refresh
            $location.path('/features');

        }, function error(response) {
            $scope.updateError = 'An error ' + response.status + ' occurred';
        });
    };
});